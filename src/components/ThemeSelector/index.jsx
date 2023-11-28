import { isThemeDark, toggleTheme } from "./state";
import IconSun from "../Icon/Sun";
import IconMoon from "../Icon/Moon";

export default function ThemeSelector() {

  return (
    <div class="flex items-center gap-1 text-secondary-contrast dark:text-primary-contrast-dark">
      <IconSun/>
      <label for="colorThemeSwitchToggle"
             onClick={toggleTheme}
             aria-label="Color theme switch"
             class="relative bg-purple rounded-full p-0.25 w-3 h-1.75 cursor-pointer outline-dotted outline-0.125 outline-offset-0.125 outline-purple/0 focus-within:outline-purple/100 dark:outline-purple-light/0 dark:focus-within:outline-purple-light/100 transition-all">
        <input id="colorThemeSwitchToggle"
               name="colorThemeSwitchToggle"
               type="checkbox"
               checked={!isThemeDark()}
               class="absolute w-1.25 h-1.25 left-0 transform transition-all appearance-none border-0 bg-purple-contrast rounded-full cursor-pointer shadow-subtle focus:outline-none"
               classList={
                 {
                   '-translate-x-0' : !isThemeDark(),
                   'translate-x-full' : isThemeDark()
                 }
               }/>
      </label>
      <IconMoon/>
    </div>
  );
}
