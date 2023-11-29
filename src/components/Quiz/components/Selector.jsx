import {For} from "solid-js";
import {quizCatalog, selectQuiz} from '../';
import QuizIconTitle from "./IconTitle";
export default function QuizSelector() {

  return (

    <section class="mb-4 flex flex-wrap items-start justify-between gap-2.5 md:gap-4 lg:gap-0 lg:flex-nowrap">

      <header class="w-full lg:w-auto">
        <h1 class="mb-1 lg:mb-3 text-heading-l-sm md:text-heading-l text-primary-contrast dark:text-secondary-contrast-dark">
          <p class="mb-0.5 font-300">Welcome to the</p>
          <p class="font-700">Frontend Quiz!</p>
        </h1>
        <p class="animate-pulse italic font-300 text-body-s-sm md:text-body-s text-secondary-contrast dark:text-primary-contrast-dark">Pick a subject to get started.</p>
      </header>

      <ul class="w-full lg:w-auto flex flex-col items-stretch gap-0.75 md:gap-1.5">
        <For each={quizCatalog}>{
          (quizCatalogItem) =>
            <li>
              <button class="flex items-center w-full lg:w-35.25 rounded-0.75 md:rounded-1.5 p-0.75 lg:p-1.25 gap-2 cursor-pointer border-none text-heading-s-sm md:text-heading-s font-500 bg-secondary text-primary-contrast dark:bg-secondary-dark dark:text-secondary-contrast-dark shadow dark:shadow-dark outline outline-0.1875 outline-purple/0 focus-visible:outline-purple/100 dark:outline-purple-light/0 dark:focus-visible:outline-purple-light/100 transition-all"
                      type="button"
                      onclick={(e)=>{e.preventDefault();selectQuiz(quizCatalogItem.title)}}>
                <QuizIconTitle icon={quizCatalogItem.icon}
                               title={quizCatalogItem.title}/>
              </button>
            </li>
        }</For>
      </ul>

    </section>

  );

}
