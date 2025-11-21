import css from "./App.module.scss";
import ResultsSummary from "./components/ResultsSummary";
import type { ResultProps } from "./types";
import useFetch from "./useFetch";

export default function App() {
  const { data: results } = useFetch<ResultProps[]>("data.json");

  return (
    <main className={css.app}>
      <h1>Your Results Summary</h1>
      {results && <ResultsSummary results={results} />}
    </main>
  );
}
