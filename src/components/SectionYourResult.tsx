import { TotalScoreProps } from "../libs/types";
import Congratulation from "./Congratulation";
import TotalScore from "./TotalScore";

function SectionYourResult({ totalScore }: TotalScoreProps) {
  return (
    <section id="your-result" className="section section--your-result">
      <h1 className="section__heading section--your-result__heading">
        Your Result
      </h1>

      <div className="section--your-result__content">
        <TotalScore totalScore={totalScore} />
        <Congratulation />
      </div>
    </section>
  );
}

export default SectionYourResult;
