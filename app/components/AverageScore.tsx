import styles from "./AverageScore.module.scss";

interface TotalScoreProp {
  scores: number[];
}

export default function TotalScore({ scores }: TotalScoreProp) {
  const totalScore = scores.reduce(
    (accumulator, score) => accumulator + score,
    0
  );

  const averageScore = Math.round(totalScore / scores.length);

  return (
    <div className={`${styles.averageScore}`}>
      <div className="text-preset-xl text-white">{averageScore}</div>
      <div className="transparent-50 bold">of 100</div>
    </div>
  );
}
