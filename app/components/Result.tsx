import Image from "next/image";
import { ResultProps } from "../types";
import styles from "./Result.module.scss";

export default function Result({
  category = "Category",
  score = 0,
  icon = "",
}: ResultProps) {
  return (
    <div className={`${styles.result}`}>
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
