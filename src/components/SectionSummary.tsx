import { MAX_SCORE } from "../libs/hardCodedValues";
import { CategoriesProps } from "../libs/types";

function SectionSummary({ categories }: CategoriesProps) {
  return (
    <section id="summary" className="summary">
      <h2 className="summary__heading">Summary</h2>

      <ul className="categories-list">
        {categories.map(({ category, score, icon }, index) => (
          <li key={index}>
            <div className="category">
              <div className="category__info">
                <img src={icon} alt={category} className="category__icon" />
                <div className="category__name">{category}</div>
              </div>

              <div className="category__score">
                <span className="category__score__achieved">{score} </span>
                <span className="category__score__cap">/ {MAX_SCORE}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button className="button">Continue</button>
    </section>
  );
}

export default SectionSummary;
