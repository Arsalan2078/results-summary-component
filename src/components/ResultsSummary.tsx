import styles from "./ResultsSummary.module.css";
import SectionYourResult from "./SectionYourResult";

function ResultsSummary() {
  return (
    <div className={`${styles.resultsSummary}`}>
      <SectionYourResult />
    </div>
  );
}

export default ResultsSummary;
