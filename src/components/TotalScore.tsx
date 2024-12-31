import { MAX_SCORE } from "../libs/hardCodedValues";
import { TotalScoreProps } from "../libs/types";

function TotalScore({ totalScore }: TotalScoreProps) {
  return (
    <div className="total-score">
      <div className="total-score__achieved">{totalScore}</div>
      <div className="total-score__cap">of {MAX_SCORE}</div>
    </div>
  );
}

export default TotalScore;
