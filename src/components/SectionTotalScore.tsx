import { MAX_SCORE } from "../libs/hardCodedValues";
import { TotalScoreProps } from "../libs/types";

function SectionTotalScore({ totalScore }: TotalScoreProps) {
  return (
    <section id="your-result" className="your-result">
      <h1 className="your-result__heading">Your Result</h1>

      <div className="your-result__content">
        <div className="total-score">
          <div className="total-score__achieved">{totalScore}</div>
          <div className="total-score__cap">of {MAX_SCORE}</div>
        </div>

        <div className="congratulation">
          <div className="congratulation__heading">Great</div>
          <p className="congratulation__paragraph">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionTotalScore;
