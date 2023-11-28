import QuizSelector from "./Selector";
import {hasSelectedQuizMoreQuestion, isQuizSelected} from "../state";
import {Show} from "solid-js";
import QuizQuestionnaire from "./Questionnaire";
import QuizScore from "./Score";

export default function Quiz() {
  return (
    <>
      <Show when={!isQuizSelected()}>
        <QuizSelector/>
      </Show>
      <Show when={!!isQuizSelected() && hasSelectedQuizMoreQuestion()}>
        <QuizQuestionnaire/>
      </Show>
      <Show when={!!isQuizSelected() && !hasSelectedQuizMoreQuestion()}>
        <QuizScore/>
      </Show>
    </>
  );
}
