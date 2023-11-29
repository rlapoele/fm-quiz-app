import {Match, Switch} from "solid-js";
import IconCss from "../../Icon/Css";
import IconHtml from "../../Icon/Html";
import IconJs from "../../Icon/Js";
import IconA11y from "../../Icon/A11y";

export default function QuizIcon(props) {
  return (
    <Switch>
      <Match when={props.icon === './assets/images/icon-html.svg'}><span class="flex items-center justify-center w-2.5 h-2.5 p-0.375 md:p-0.5 md:w-3.5 md:h-3.5 rounded-0.75 bg-red-light text-red"><IconHtml/></span></Match>
      <Match when={props.icon === './assets/images/icon-css.svg'}><span class="flex items-center justify-center w-2.5 h-2.5 md:w-3.5 p-0.375 md:p-0.5 md:h-3.5 rounded-0.75 bg-green-light text-green"><IconCss/></span></Match>
      <Match when={props.icon === './assets/images/icon-js.svg'}><span class="flex items-center justify-center w-2.5 h-2.5 md:w-3.5 p-0.375 md:p-0.5 md:h-3.5 rounded-0.75 bg-blue-light text-blue"><IconJs/></span></Match>
      <Match when={props.icon === './assets/images/icon-accessibility.svg'}><span class="flex items-center justify-center w-2.5 h-2.5 p-0.375 md:p-0.5 md:w-3.5 md:h-3.5 rounded-0.75 bg-purple-lightest text-purple"><IconA11y/></span></Match>
    </Switch>
  );
}
