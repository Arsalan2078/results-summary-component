import css from "./App.module.scss";
import type { ResultProps } from "./types";
import useFetch from "./useFetch";

export default function App() {
  const { data: results } = useFetch<ResultProps[]>("src/data.json");

  return (
    <div className={css.app}>
      {results && (
        <ul>
          {results.map(({ category, score, icon }) => (
            <li>
              <img src={icon} alt="" />
              {category}: {score}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
