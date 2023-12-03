import QuizIcon from "./Icon";
export default function QuizIconTitle(props) {
  return (
    <span class={["flex gap-0.75 md:gap-1.5 items-center", props.class].join(' ')}>
      <QuizIcon icon={props.icon}/>
      <span class="text-heading-s-sm md:text-heading-s font-500 text-primary-contrast dark:text-secondary-contrast-dark">{props.title}</span>
    </span>
  );
}
