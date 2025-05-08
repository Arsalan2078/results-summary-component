import styles from "./page.module.scss";

import ResultsSummary from "./components/ResultsSummary";

export default function Home() {
  return (
    <div className={styles.page}>
      <ResultsSummary />
    </div>
  );
}
