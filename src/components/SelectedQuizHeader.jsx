import {Show} from "solid-js";
import {getSelectedQuizTitle, getSelectedQuizIcon, isQuizSelected} from "./Quiz";
import QuizIconTitle from "./Quiz/components/IconTitle";

export default function SelectedQuizHeader() {
  return (
    <>
      <Show when={ isQuizSelected() } fallback={<div class="h-3.5 p-0.5"></div>}>
        <QuizIconTitle icon={getSelectedQuizIcon()} title={getSelectedQuizTitle()}/>
      </Show>
    </>
  );
}
