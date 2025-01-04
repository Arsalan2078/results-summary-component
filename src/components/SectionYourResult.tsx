import { MAX_SCORE } from "../libs/constants";
import Section from "./Section";
import styles from "./SectionYourResult.module.css";

function SectionYourResult() {
  return (
    <Section id={`your-summary`} className={`${styles.sectionYourResult}`}>
      <h1 className={`${styles.heading}`}>Your Result</h1>

      <div className={`${styles.content}`}>
        <div className={`${styles.scoreContainer}`}>
          <div className={`${styles.scoreAchieved}`}>76</div>
          <div className={`${styles.scoreCap}`}>of {MAX_SCORE}</div>
        </div>

        <div className={`${styles.congratulation}`}>
          <div className={`${styles.congratulationHeading}`}>Great</div>
          <p className={`${styles.congratulationParagraph}`}>
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
      </div>
    </Section>
  );
}

export default SectionYourResult;
