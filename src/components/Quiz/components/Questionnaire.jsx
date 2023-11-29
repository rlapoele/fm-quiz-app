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
  getSelectedQuizQuestions, hasQuizError, isSelectedQuizCurrentQuestionLast,
  validateQuestionAnswer,
} from "../state";
import ProgressIndicator from "./ProgressIndicator";
import IconIncorrect from "../../Icon/Incorrect";
import IconCorrect from "../../Icon/Correct";
export default function QuizQuestionnaire() {
  const questionAnswerLetters = ['A','B','C','D','E','F','G','H','I','J'];
  return (
    <section class="mb-4 flex flex-wrap items-start justify-between gap-2.5 md:gap-4 lg:gap-0 lg:flex-nowrap">

      <header class="w-full lg:w-29 lg:h-28.25">
        <p class="mb-0.75 md:mb-1.75 italic font-300 text-body-s-sm md:text-body-s text-secondary-contrast dark:text-primary-contrast-dark">Question {getSelectedQuizCurrentQuestionNumber()} of {getSelectedQuizQuestions().length}</p>
        <h1 class="mb-1.5 md:mb-2.5 lg:mb-11.25 font-500 text-heading-m-sm md:text-heading-m text-primary-contrast dark:text-secondary-contrast-dark">{getSelectedQuizCurrentQuestionText()}</h1>
        <ProgressIndicator class="" progressPercentage={getSelectedQuizProgressPercentage()}/>
      </header>

      <ul class="w-full lg:w-35.25 flex flex-col items-stretch gap-0.75 md:gap-1.5">
        <For each={ getSelectedQuizCurrentQuestionProposedAnswers() }>{
          (selectedQuizQuestionProposedAnswer, index) =>
            <li>
              <button type="button"
                      class="group text-left flex items-center w-full lg:w-35.25 rounded-0.75 md:rounded-1.5 p-[9px] lg:py-[15px] lg:px-[17px] gap-1 md:gap-2 text-heading-s-sm md:text-heading-s font-500 bg-secondary text-primary-contrast dark:bg-secondary-dark dark:text-secondary-contrast-dark shadow dark:shadow-dark border-0.1875 border-purple/0 focus-visible:border-purple/100 dark:border-purple-light/0 dark:focus-visible:border-purple-light/100 outline-none transition-all"
                      classList=
                        {
                          {
                            'cursor-default': getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                            'cursor-pointer': !getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                            '!border-purple': selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText() && !getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                            '!border-red': (selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText()) && (selectedQuizQuestionProposedAnswer !== getSelectedQuizCurrentQuestionValidAnswer()) && getCurrentQuestionPlayerAnswerHasBeenValidatedFlag(),
                            '!border-green': (selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText()) && (selectedQuizQuestionProposedAnswer === getSelectedQuizCurrentQuestionValidAnswer()) && getCurrentQuestionPlayerAnswerHasBeenValidatedFlag()
                          }
                        }
                      disabled={getCurrentQuestionPlayerAnswerHasBeenValidatedFlag()}
                      onclick={(e)=>{e.preventDefault();if(!getCurrentQuestionPlayerAnswerHasBeenValidatedFlag()) answerCurrentQuestion(selectedQuizQuestionProposedAnswer);}}>

                <span class="shrink-0 flex items-center justify-center w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-0.5 md:rounded-0.75 bg-primary text-primary-contrast dark:text-secondary-contrast transition-colors"
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

                <Show when={getCurrentQuestionPlayerAnswerHasBeenValidatedFlag()} fallback={<span class="block w-2 h-2 md:w-2.5 md:h-2.5">&nbsp;</span>}>
                  <Show when={selectedQuizQuestionProposedAnswer === getSelectedQuizCurrentQuestionValidAnswer()}>
                    <span class="shrink-0 flex items-center justify-center text-green"><IconCorrect class="w-2 h-2 md:w-2.5 md:h-2.5"/></span>
                  </Show>
                  <Show when={(selectedQuizQuestionProposedAnswer !== getSelectedQuizCurrentQuestionValidAnswer()) && (selectedQuizQuestionProposedAnswer === getCurrentQuestionPlayerAnswerText())}>
                    <span class="shrink-0 flex items-center justify-center text-red"><IconIncorrect class="w-2 h-2 md:w-2.5 md:h-2.5"/></span>
                  </Show>
                  <Show when={(selectedQuizQuestionProposedAnswer !== getSelectedQuizCurrentQuestionValidAnswer()) && (selectedQuizQuestionProposedAnswer !== getCurrentQuestionPlayerAnswerText())}>
                    <span class="shrink-0 block w-2 h-2 md:w-2.5 md:h-2.5">&nbsp;</span>
                  </Show>
                </Show>

              </button>
            </li>
        }</For>
        <li class="md:mt-0.5">
          <Show when={!getCurrentQuestionPlayerAnswerHasBeenValidatedFlag()}
                fallback={
                  <button type="button"
                          class="flex items-center justify-center w-full lg:w-35.25 rounded-0.75 md:rounded-1.5 p-1.1875 md:p-2 gap-2 cursor-pointer border-none text-heading-s-sm md:text-heading-s font-500 bg-purple text-purple-contrast hover:bg-purple-light shadow dark:shadow-dark outline-dotted outline-0.125 md:outline-0.1875 outline-offset-0.125 outline-purple/0 focus-visible:outline-purple/100 dark:outline-purple-light/0 dark:focus-visible:outline-purple-light/100 transition-all"
                          onclick={()=> { getNextQuestion() } }>{isSelectedQuizCurrentQuestionLast()?'View Score':'Next Question'}</button>
                }>
            <button type="button"
                    class="flex items-center justify-center w-full lg:w-35.25 rounded-0.75 md:rounded-1.5 p-1.1875 md:p-2 gap-2 cursor-pointer border-none text-heading-s-sm md:text-heading-s font-500 bg-purple text-purple-contrast hover:bg-purple-light shadow dark:shadow-dark outline-dotted outline-0.125 md:outline-0.1875 outline-offset-0.125 outline-purple/0 focus-visible:outline-purple/100 dark:outline-purple-light/0 dark:focus-visible:outline-purple-light/100 transition-all"
                    onclick={()=> { validateQuestionAnswer() } }>Submit Question</button>
          </Show>
        </li>
        <Show when={hasQuizError()}>
          <li>
            <p class="flex items-center justify-center font-300 text-body-m-sm md:text-body-m text-red dark:text-secondary-contrast-dark">
              <span class="text-red"><IconIncorrect class="w-2 h-2 md:w-2.5 md:h-2.5"/></span>
              <span class="ml-0.5">Please select an answer</span>
            </p>
          </li>
        </Show>
      </ul>

    </section>
  );
}
