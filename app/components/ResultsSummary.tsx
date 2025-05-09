import Button from "./Button";
import Congratulation from "./Congratulation";
import Result from "./Result";
import styles from "./ResultsSummary.module.scss";
import TotalScore from "./TotalScore";

export default function ResultsSummary() {
  return (
    <div className={`${styles.resultsSummary}`}>
      <section className={`${styles.section} ${styles.yourResult}`}>
        <h2 className="text-preset-md">Your Result</h2>

        <TotalScore totalScore={76} />

        <Congratulation />
      </section>

      <section className={`${styles.section} ${styles.summary}`}>
        <h3 className="text-preset-md">Summary</h3>
        <ul className={styles.resultsList}>
          <li>
            <Result category="Reaction" score={80} icon="./icon-reaction.svg" />
          </li>
          <li>
            <Result category="Reaction" score={80} icon="./icon-reaction.svg" />
          </li>
          <li>
            <Result category="Reaction" score={80} icon="./icon-reaction.svg" />
          </li>
          <li>
            <Result category="Reaction" score={80} icon="./icon-reaction.svg" />
          </li>
        </ul>

        <Button href="#">Continue</Button>
      </section>
    </div>
  );
}
