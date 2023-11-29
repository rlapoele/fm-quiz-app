import {Show} from "solid-js";
import {getSelectedQuizIcon, getSelectedQuizTitle, isQuizSelected, Quiz} from "../Quiz";
import QuizIconTitle from "../Quiz/components/IconTitle";
import ThemeSelector from "../ThemeSelector";

function QuizApp() {
  return (
    <>
      <header class="flex justify-between px-1.5 py-1 md:px-4 md:py-2.5 lg:px-8.75 lg:py-5.25">
        <Show when={ isQuizSelected() } fallback={<div class="h-3.5 p-0.5"></div>}>
          <QuizIconTitle icon={getSelectedQuizIcon()} title={getSelectedQuizTitle()}/>
        </Show>
        <ThemeSelector />
      </header>
      <main class="px-1.5 pt-2 md:px-4 lg:px-8.75">
        <Quiz/>
      </main>
    </>
  );
}
export default QuizApp;

// h-2.5 md:h-3.5
