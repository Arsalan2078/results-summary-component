import styles from "./Congratulation.module.scss";
export default function Congratulation() {
  return (
    <div className={styles.congratulation}>
      <div className="text-preset-lg text-white">Great</div>
      <p>Your performance exceed 65% of the people conducting the test here!</p>
    </div>
  );
}
