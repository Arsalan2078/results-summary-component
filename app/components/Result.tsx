import Image from "next/image";
import { ResultProps } from "../types";
import styles from "./Result.module.scss";

export default function Result({
  category = "reaction",
  score = 0,
  icon = "",
}: ResultProps) {
  let categoryClassName = "";

  return (
    <div
      className={`${styles.result} ${
        category.toLowerCase() === "reaction"
          ? styles.reaction
          : category.toLowerCase() === "memory"
          ? styles.memory
          : category.toLowerCase() === "verbal"
          ? styles.verbal
          : category.toLowerCase() === "visual"
          ? styles.visual
          : ""
      }`}
    >
      <div className={`${styles.stack1}`}>
        <Image src={icon} alt="" width={20} height={20} />
        <div className={styles.category}>{category}</div>
      </div>

      <div className={`${styles.stack2} bold`}>
        <div>{score}</div>
        <div className="transparent-50">/ 100</div>
      </div>
    </div>
  );
}
