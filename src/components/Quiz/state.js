import {createMemo, createSignal} from "solid-js";
import defaultQuizzes from "../../data/defaultQuizzes.json";

const SELECTED_QUIZ_DEFAULT = null;
const SELECTED_QUIZ_CURRENT_QUESTION_INDEX_DEFAULT = 0;
const PLAYER_QUIZ_ANSWERS_DEFAULT = [];
const HAS_ERROR_DEFAULT = false;

const quizzes = defaultQuizzes.quizzes;
export const quizTitles = quizzes.map(quiz => quiz.title);
export const quizCatalog = quizzes.map(quiz => { return { title: quiz.title, icon: quiz.icon }});

const [getSelectedQuiz, setSelectedQuiz] = createSignal(SELECTED_QUIZ_DEFAULT);
const [selectedQuizCurrentQuestionIndex, setSelectedQuizCurrentQuestionIndex] = createSignal(SELECTED_QUIZ_CURRENT_QUESTION_INDEX_DEFAULT);
const [playerQuizAnswers, setPlayerQuizAnswers] = createSignal(PLAYER_QUIZ_ANSWERS_DEFAULT);
const [hasError, setHasError] = createSignal(HAS_ERROR_DEFAULT);

export const selectQuiz =
  (title) => {
    const foundQuiz = quizzes.filter((quiz) => quiz.title === title);
    if (foundQuiz.length === 1) {
      setSelectedQuiz(foundQuiz[0]);
    }
    setSelectedQuizCurrentQuestionIndex(SELECTED_QUIZ_CURRENT_QUESTION_INDEX_DEFAULT);
    setPlayerQuizAnswers(PLAYER_QUIZ_ANSWERS_DEFAULT);
  };

export const resetQuiz = () => setSelectedQuiz(SELECTED_QUIZ_DEFAULT);
export const isQuizSelected = createMemo(()=> getSelectedQuiz() !== null );
export const getSelectedQuizTitle = () => createMemo(()=> isQuizSelected() ? getSelectedQuiz().title : '');
export const getSelectedQuizIcon = createMemo(() => isQuizSelected() ? getSelectedQuiz().icon : '');
export const getSelectedQuizQuestions = createMemo(() => isQuizSelected() ? getSelectedQuiz().questions : []);

export const hasSelectedQuizMoreQuestion = createMemo(() => selectedQuizCurrentQuestionIndex() < getSelectedQuizQuestions().length);
export const getSelectedQuizCurrentQuestion = createMemo(() => isQuizSelected() && hasSelectedQuizMoreQuestion() ? getSelectedQuizQuestions()[selectedQuizCurrentQuestionIndex()]: null);
export const getSelectedQuizCurrentQuestionText = createMemo(() => isQuizSelected()  && hasSelectedQuizMoreQuestion() ? getSelectedQuizCurrentQuestion().question: '');
export const getSelectedQuizCurrentQuestionProposedAnswers = createMemo(() => isQuizSelected() && hasSelectedQuizMoreQuestion() ? getSelectedQuizCurrentQuestion().options : []);
export const getSelectedQuizCurrentQuestionValidAnswer = createMemo(() => isQuizSelected()  && hasSelectedQuizMoreQuestion() ? getSelectedQuizCurrentQuestion().answer : '');
export const getSelectedQuizCurrentQuestionNumber = createMemo(() => selectedQuizCurrentQuestionIndex() + 1);
export const getSelectedQuizProgressPercentage = createMemo(() => Math.round(((selectedQuizCurrentQuestionIndex() + 1) / getSelectedQuizQuestions().length) * 100));
export const getCurrentQuestionPlayerAnswer = createMemo(() => !!playerQuizAnswers()[selectedQuizCurrentQuestionIndex()] ? playerQuizAnswers()[selectedQuizCurrentQuestionIndex()] : null);
export const getCurrentQuestionPlayerAnswerText = createMemo(() =>  hasSelectedQuizMoreQuestion() && !!playerQuizAnswers()[selectedQuizCurrentQuestionIndex()] ? playerQuizAnswers()[selectedQuizCurrentQuestionIndex()].givenAnswerText : '');
export const getCurrentQuestionPlayerAnswerHasBeenValidatedFlag = createMemo(() =>  hasSelectedQuizMoreQuestion() && !!playerQuizAnswers()[selectedQuizCurrentQuestionIndex()] ? playerQuizAnswers()[selectedQuizCurrentQuestionIndex()].hasBeenValidated : false);

export const answerCurrentQuestion = (answer) => {
  setPlayerQuizAnswers(
    (answers) => {
      let newAnswers = [...answers];
      newAnswers[selectedQuizCurrentQuestionIndex()] = {
        givenAnswerText: answer,
        validAnswerText: getSelectedQuizCurrentQuestionValidAnswer(),
        hasBeenValidated: false,
      };
      setHasError(false);
      return newAnswers;
    }
  );
};

export const validateQuestionAnswer = () => {
  if(!!getCurrentQuestionPlayerAnswer()) {
    setPlayerQuizAnswers(
      (answers) => {
        let newAnswers = [...answers];
        newAnswers[selectedQuizCurrentQuestionIndex()].hasBeenValidated = true;
        return newAnswers;
      }
    );
  }
  else {
    setHasError(true);
  }
};

export const hasQuizError = () => hasError();

export const getNextQuestion = () => {
  if(hasSelectedQuizMoreQuestion()) {
    setSelectedQuizCurrentQuestionIndex(selectedQuizCurrentQuestionIndex() + 1);
  }
}


export const getSelectedQuizScore = createMemo(
  () => playerQuizAnswers().reduce((score, quizAnswer) => quizAnswer.givenAnswerText === quizAnswer.validAnswerText ? score + 1 : score ,0)
);
