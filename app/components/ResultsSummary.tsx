"use client";

import useFetch from "../hooks/useFetch";
import { ResultProps } from "../types";
import Button from "./Button";
import Result from "./Result";
import styles from "./ResultsSummary.module.scss";
import TotalScore from "./TotalScore";

export default function ResultsSummary() {
  const {
    data: results,
    isLoading,
    error,
  } = useFetch<ResultProps[]>("./data.json");

  console.log(results);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {results && (
        <div className={`${styles.resultsSummary}`}>
          <section className={`${styles.section} ${styles.yourResult}`}>
            <h2 className="text-preset-md">Your Result</h2>

            <div className={styles.content}>
              <TotalScore
                totalScore={Math.round(
                  results?.reduce(
                    (accumulator, result) => accumulator + result.score,
                    0
                  ) / results.length
                )}
              />

              <div className={styles.congratulation}>
                <div className="text-preset-lg text-white">Great</div>
                <p>
                  Your performance exceed 65% of the people conducting the test
                  here!
                </p>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.summary}`}>
            <h3 className="text-preset-md">Summary</h3>
            <ul className={styles.resultsList}>
              {results.map(({ category, score, icon }, index) => (
                <li key={index}>
                  <Result category={category} score={score} icon={icon} />
                </li>
              ))}
            </ul>

            <Button href="#">Continue</Button>
          </section>
        </div>
      )}
    </>
  );
}
