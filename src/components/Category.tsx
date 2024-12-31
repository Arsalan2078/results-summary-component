import { MAX_SCORE } from "../libs/hardCodedValues";
import { CategoryProps } from "../libs/types";

function Category({ category, score, icon }: CategoryProps) {
  return (
    <div className="category">
      <div className="category__info">
        <img src={icon} alt={`Icon-${category}`} className="category__icon" />
        <div className="category__name">{category}</div>
      </div>

      <div className="category__score">
        <span>{score}</span> / {MAX_SCORE}
      </div>
    </div>
  );
}

export default Category;
