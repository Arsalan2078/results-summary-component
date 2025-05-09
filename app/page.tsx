import styles from "./page.module.scss";

import ResultsSummary from "./components/ResultsSummary";

export default function Home() {
  return (
    <main className={styles.page}>
      <ResultsSummary />
    </main>
  );
}
