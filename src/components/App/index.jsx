import SelectedQuizHeader from "../SelectedQuizHeader";
import ThemeSelector from "../ThemeSelector";
import { Quiz } from "../Quiz";


function App() {
  return (
    <>
      <header class="flex justify-between py-2.5 lg:py-5.25 px-4 lg:px-8.75">
        <SelectedQuizHeader />
        <ThemeSelector />
      </header>
      <main class="px-4 lg:px-8.75">
        <Quiz/>
      </main>
    </>
  );
}

export default App;

// h-2.5 md:h-3.5
