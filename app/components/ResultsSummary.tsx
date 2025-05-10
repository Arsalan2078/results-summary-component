import Button from "./Button";
import Result from "./Result";
import styles from "./ResultsSummary.module.scss";
import TotalScore from "./TotalScore";

export default function ResultsSummary() {
  return (
    <div className={`${styles.resultsSummary}`}>
      <section className={`${styles.section} ${styles.yourResult}`}>
        <h2 className="text-preset-md">Your Result</h2>

        <div className={styles.content}>
          <TotalScore totalScore={76} />

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
          <li>
            <Result category="Reaction" score={80} icon="./icon-reaction.svg" />
          </li>
          <li>
            <Result category="Memory" score={92} icon="./icon-memory.svg" />
          </li>
          <li>
            <Result category="Verbal" score={61} icon="./icon-verbal.svg" />
          </li>
          <li>
            <Result category="Visual" score={73} icon="./icon-visual.svg" />
          </li>
        </ul>

        <Button href="#">Continue</Button>
      </section>
    </div>
  );
}
