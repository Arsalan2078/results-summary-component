import { MAX_SCORE } from "../libs/hardCodedValues";
import { CategoryProps } from "../libs/types";

function Category({ category, score, icon }: CategoryProps) {
  return (
    <div className={`category category--${category.toLocaleLowerCase()}`}>
      <div className="category__info">
        <img
          src={icon}
          alt={`icon-${category.toLocaleLowerCase()}`}
          className="category__icon"
        />
        <div
          className={`category__name category--${category.toLocaleLowerCase()}__name`}
        >
          {category}
        </div>
      </div>

      <div className="category__score">
        <span className="category__score__achieved">{score} </span>
        <span className="category__score__cap">/ {MAX_SCORE}</span>
      </div>
    </div>
  );
}

export default Category;
