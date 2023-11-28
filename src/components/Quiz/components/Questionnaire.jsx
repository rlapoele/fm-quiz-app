import {For, Show} from "solid-js";
import {
  answerCurrentQuestion,
  getCurrentQuestionPlayerAnswerHasBeenValidatedFlag,
  getCurrentQuestionPlayerAnswerText,
  getNextQuestion,
  getSelectedQuizCurrentQuestionNumber,
  getSelectedQuizCurrentQuestionProposedAnswers,
  getSelectedQuizCurrentQuestionText, getSelectedQuizCurrentQuestionValidAnswer,
  getSelectedQuizProgressPercentage,
  getSelectedQuizQuestions, hasQuizError,
  validateQuestionAnswer,
} from "../state";
import ProgressIndicator from "./ProgressIndicator";
import IconIncorrect from "../../Icon/Incorrect";
import IconCorrect from "../../Icon/Correct";
export default function QuizQuestionnaire() {
  const questionAnswerLetters = ['A','B','C','D','E','F','G','H','I','J'];
  return (
    <section class="mb-4 flex flex-wrap items-start justify-between gap-4 lg:flex-nowrap">

      <header class="w-full lg:w-auto">
        <p class="mb-1.75 italic font-300 text-body-s text-secondary-contrast dark:text-primary-contrast-dark">Question {getSelectedQuizCurrentQuestionNumber()} of {getSelectedQuizQuestions().length}.</p>
        <h1 class="mb-2.5 lg:mb-10.25 text-heading-m text-primary-contrast dark:text-secondary-contrast-dark">{getSelectedQuizCurrentQuestionText()}</h1>
        <ProgressIndicator class="" progressPercentage={getSelectedQuizProgressPercentage()}/>
      </header>

      <ul class="w-full lg:w-auto flex flex-col items-stretch gap-1.5">
        <For each={ getSelectedQuizCurrentQuestionProposedAnswers() }>{
          (selectedQuizQuestionProposedAnswer, index) =>
            <li>
              <button type="button"
                      class="group text-left flex items-center w-full lg:w-35.25 rounded-1.5 p-1.25 gap-2 cursor-pointer border-none text-heading-s font-500 bg-secondary text-primary-contrast dark:bg-secondary-dark dark:text-secondary-contrast-dark shadow dark:shadow-dark outline outline-0.1875 outline-purple/0 focus-visible:outline-purple/100 dark:outline-purple-light/0 dark:focus-visible:outline-purple-light/100 transition-all"
                      classList=
                        {
                          {
                            'cursor-default': getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                            '!outline-purple': selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText() && !getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                            '!outline-red': (selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText()) && (selectedQuizQuestionProposedAnswer !== getSelectedQuizCurrentQuestionValidAnswer()) && getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                            '!outline-green': (selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText()) && (selectedQuizQuestionProposedAnswer === getSelectedQuizCurrentQuestionValidAnswer()) && getCurrentQuestionPlayerAnswerHasBeenValidatedFlag()
                          }
                        }
                      onclick={(e)=>{e.preventDefault();if(!getCurrentQuestionPlayerAnswerHasBeenValidatedFlag()) answerCurrentQuestion(selectedQuizQuestionProposedAnswer);}}>

                <span class="shrink-0 flex items-center justify-center w-3.5 h-3.5 p-0.5 rounded-0.5 bg-primary text-primary-contrast dark:bg-primary-dark dark:text-primary-contrast-dark transition-colors"
                      classList={
                        {
                          '!bg-purple': (selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText()) && !getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                          '!text-purple-contrast': (selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText()) && !getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                          'group-hover:bg-purple-lightest': (selectedQuizQuestionProposedAnswer !== getCurrentQuestionPlayerAnswerText()) && !getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                          'group-hover:text-purple': (selectedQuizQuestionProposedAnswer !== getCurrentQuestionPlayerAnswerText()) && !getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                          'group-hover:dark:bg-purple-lightest': (selectedQuizQuestionProposedAnswer !== getCurrentQuestionPlayerAnswerText()) && !getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                          'group-hover:dark:text-purple': (selectedQuizQuestionProposedAnswer !== getCurrentQuestionPlayerAnswerText()) && !getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                          '!group-hover:bg-purple': (selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText()) && !getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                          '!group-hover:text-purple-contrast': (selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText()) && !getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                          '!bg-red': (selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText()) && (selectedQuizQuestionProposedAnswer !== getSelectedQuizCurrentQuestionValidAnswer()) && getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                          '!text-red-contrast': (selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText()) && (selectedQuizQuestionProposedAnswer !== getSelectedQuizCurrentQuestionValidAnswer()) && getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                          '!bg-green': (selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText()) && (selectedQuizQuestionProposedAnswer === getSelectedQuizCurrentQuestionValidAnswer()) && getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                          '!text-green-contrast': (selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText()) && (selectedQuizQuestionProposedAnswer === getSelectedQuizCurrentQuestionValidAnswer()) && getCurrentQuestionPlayerAnswerHasBeenValidatedFlag()

                        }
                      }>{questionAnswerLetters[index()]}
                </span>

                <span class="grow">{selectedQuizQuestionProposedAnswer}</span>

                <Show when={getCurrentQuestionPlayerAnswerHasBeenValidatedFlag()} fallback={<span class="block w-2.5 h-2.5">&nbsp;</span>}>
                  <Show when={selectedQuizQuestionProposedAnswer === getSelectedQuizCurrentQuestionValidAnswer()}>
                    <span class="shrink-0 flex items-center justify-center text-green"><IconCorrect/></span>
                  </Show>
                  <Show when={(selectedQuizQuestionProposedAnswer !== getSelectedQuizCurrentQuestionValidAnswer()) && (selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText())}>
                    <span class="shrink-0 flex items-center justify-center text-red"><IconIncorrect/></span>
                  </Show>
                  <Show when={(selectedQuizQuestionProposedAnswer !== getSelectedQuizCurrentQuestionValidAnswer()) && (selectedQuizQuestionProposedAnswer !== getCurrentQuestionPlayerAnswerText())}>
                    <span class="block w-2.5 h-2.5">&nbsp;</span>
                  </Show>
                </Show>

              </button>
            </li>
        }</For>
        <li>
          <Show when={!getCurrentQuestionPlayerAnswerHasBeenValidatedFlag()}
                fallback={
                  <button type="button"
                          class="flex items-center justify-center w-full lg:w-35.25 rounded-1.5 p-2 gap-2 cursor-pointer border-none text-heading-s font-500 bg-purple text-purple-contrast hover:bg-purple-light outline outline-0.1875 outline-offset-0.125 outline-purple/0 focus-visible:outline-purple/100 shadow dark:shadow-dark"
                          onclick={()=> { getNextQuestion() } }>Next Question</button>
                }>
            <button type="button"
                    class="flex items-center justify-center w-full lg:w-35.25 rounded-1.5 p-2 gap-2 cursor-pointer border-none text-heading-s font-500 bg-purple text-purple-contrast hover:bg-purple-light outline-dotted outline-0.1875 outline-offset-0.125 outline-purple/0 focus-visible:outline-purple/100 shadow dark:shadow-dark"
                    onclick={()=> { validateQuestionAnswer() } }>Submit Question</button>
          </Show>
        </li>
          <Show when={hasQuizError()}>
            <li>
              <p class="text-center font-300 text-body-s text-red">Please select an answer.</p>
            </li>
          </Show>
      </ul>

    </section>
  );
}


// <input type="checkbox"
//                        checked={selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswer()}
//                        class="absolute top-0 left-0 w-0 h-0 appearance-none outline-none"/>
