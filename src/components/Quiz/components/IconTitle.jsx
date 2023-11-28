import QuizIcon from "./Icon";
import {mergeProps} from "solid-js";

export default function QuizIconTitle(props) {
  return (
    <div class={["flex gap-1 items-center", props.class].join(' ')}>
      <QuizIcon icon={props.icon}/>
      <h2 class="text-heading-s font-500 text-primary-contrast dark:text-secondary-contrast-dark">{props.title}</h2>
    </div>
  );
}
