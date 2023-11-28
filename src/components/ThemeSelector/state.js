import {createEffect, createSignal, createMemo} from "solid-js";

const THEME_KEY = 'theme';
const THEME_ATTRIBUTE_KEY = 'data-theme';
const THEME_DARK = 'dark';
const THEME_LIGHT = 'light';

let initialThemeValue;

if (localStorage.getItem(THEME_KEY) === THEME_DARK || (!(THEME_KEY in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.setAttribute(THEME_ATTRIBUTE_KEY,THEME_DARK);
  initialThemeValue = THEME_DARK;
}
else {
  document.documentElement.setAttribute(THEME_ATTRIBUTE_KEY,THEME_LIGHT);
  initialThemeValue = THEME_LIGHT;
}

if(!(THEME_KEY in localStorage)) {
  localStorage.setItem(THEME_KEY, initialThemeValue);
}

const [isThemeDark, setIsThemeDark] =
  createSignal(THEME_DARK === initialThemeValue);

const derivedThemeValue = createMemo(() => isThemeDark() ? THEME_DARK : THEME_LIGHT);

function toggleTheme(event) {
  event.preventDefault();
  setIsThemeDark((wasThemeDark) => !wasThemeDark);
}

createEffect(()=> {
  document.documentElement.setAttribute(THEME_ATTRIBUTE_KEY, derivedThemeValue());
  localStorage.setItem(THEME_KEY, derivedThemeValue());
});

export { isThemeDark, toggleTheme }
