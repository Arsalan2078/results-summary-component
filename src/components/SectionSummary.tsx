import { CategoriesProps } from "../libs/types";
import Button from "./Button";
import Category from "./Category";

function SectionSummary({ categories }: CategoriesProps) {
  return (
    <section id="summary" className="section section--summary">
      <h2 className="section__heading section--summary__heading">Summary</h2>

      <ul className="categories-list">
        {categories.map(({ category, score, icon }, index) => (
          <li key={index}>
            <Category category={category} score={score} icon={icon} />
          </li>
        ))}
      </ul>

      <Button>Continue</Button>
    </section>
  );
}

export default SectionSummary;
