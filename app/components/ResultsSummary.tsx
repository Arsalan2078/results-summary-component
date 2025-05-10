"use client";

import useFetch from "../hooks/useFetch";
import { ResultProps } from "../types";
import Button from "./Button";
import Result from "./Result";
import styles from "./ResultsSummary.module.scss";
import AverageScore from "./AverageScore";
import Congratulation from "./Congratulation";

export default function ResultsSummary() {
  const {
    data: results,
    isLoading,
    error,
  } = useFetch<ResultProps[]>("./data.json");

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {results && (
        <div className={`${styles.resultsSummary}`}>
          <section className={`${styles.section} ${styles.yourResult}`}>
            <h2 className="text-preset-md">Your Result</h2>

            <div className={styles.content}>
              <AverageScore scores={results.map((result) => result.score)} />
              <Congratulation />
            </div>
          </section>

          <section className={`${styles.section} ${styles.summary}`}>
            <h3 className="text-preset-md">Summary</h3>
            <ul className={styles.resultsList}>
              {results.map((result, index) => (
                <li key={index}>
                  <Result
                    category={result.category}
                    score={result.score}
                    icon={result.icon}
                  />
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
