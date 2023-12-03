import {
  getSelectedQuizIcon,
  getSelectedQuizQuestions,
  getSelectedQuizScore,
  getSelectedQuizTitle,
  resetQuiz
} from "../state";
import QuizIconTitle from "./IconTitle";
export default function QuizScore() {
  return (
    <>
      <section class="mb-4 flex flex-wrap items-start justify-between gap-2.5 md:gap-4 lg:gap-0 lg:flex-nowrap">

        <header class="w-full lg:w-auto">
          <h1 class="mb-1 lg:mb-3 text-heading-l-sm md:text-heading-l text-primary-contrast dark:text-secondary-contrast-dark">
            <span class="block mb-0.5 font-300">Quiz completed</span>
            <span class="block font-500">You scored...</span>
          </h1>
        </header>

        <div class="flex flex-col gap-0.75 md:gap-2 items-center w-full lg:w-auto">
          <div class="flex flex-col items-center w-full p-3 bg-secondary text-primary-contrast dark:bg-secondary-dark dark:text-secondary-contrast-dark rounded-0.75 md:rounded-1.5 shadow dark:shadow-dark">
            <QuizIconTitle class="mb-1 md:mb-2.5" icon={getSelectedQuizIcon()} title={getSelectedQuizTitle()}/>
            <p class="font-500 text-display-sm md:text-display text-center mb-1">{getSelectedQuizScore()}</p>
            <p class="font-300 text-center text-body-s-sm md:text-body-s text-secondary-contrast dark:text-primary-contrast-dark">out of {getSelectedQuizQuestions().length}</p>
          </div>
          <button type="button"
                  class="flex items-center justify-center w-full lg:w-35.25 rounded-0.75 md:rounded-1.5 p-1.1875 md:p-2 gap-2 cursor-pointer border-none text-heading-s-sm md:text-heading-s font-500 bg-purple text-purple-contrast hover:bg-purple-light shadow dark:shadow-dark outline-dotted outline-0.125 md:outline-0.1875 outline-offset-0.125 outline-purple/0 focus-visible:outline-purple/100 dark:outline-purple-light/0 dark:focus-visible:outline-purple-light/100 transition-all"
                  onClick={()=> { resetQuiz() } }>Play Again</button>
        </div>

      </section>
    </>
  );
}
