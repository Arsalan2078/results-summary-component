import { ResultProps } from "../types";
import styles from "./TotalScore.module.scss";

interface TotalScoreProp {
  totalScore: number;
}

export default function TotalScore({ totalScore = 0 }: TotalScoreProp) {
  return (
    <div className={`${styles.totalScore}`}>
      <div className="text-preset-xl">{totalScore}</div>
      <div className="transparent-50 bold">of 100</div>
    </div>
  );
}
