import type { ResultProps } from "../../types";
import css from "./index.module.scss";

function getAverageScore({ results }: { results: ResultProps[] }) {
  return Math.round(
    results.reduce((sum, { score }) => sum + score, 0) / results.length
  );
}

export default function ResultsSummary({
  results,
}: {
  results: ResultProps[];
}) {
  return (
    <div className={css.container}>
      <div className={css.component} data-text-preset="4">
        <section>
          <h2 data-text-preset="3">Your Result</h2>

          <div className={css.circle}>
            <div data-text-preset="1">{getAverageScore({ results })}</div>
            <div data-text-preset="4-bold">of 100</div>
          </div>

          <div>
            <div data-text-preset="2">Great</div>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </section>

        <section>
          <h2 data-text-preset="3">Summary</h2>

          <ul>
            {results.map(({ category, score, icon }) => (
              <li
                key={category}
                className={css.result}
                data-category={category}
              >
                <div>
                  <img src={icon} alt="" />
                  <div>{category}</div>
                </div>

                <div data-text-preset="4-bold">
                  <div>{score}</div>
                  <div>/ 100</div>
                </div>
              </li>
            ))}
          </ul>

          <button data-text-preset="5">Continue</button>
        </section>
      </div>
    </div>
  );
}
