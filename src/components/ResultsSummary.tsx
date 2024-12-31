import Category from "./Category";
import TotalScore from "./TotalScore";
import Congratulation from "./Congratulation";
import { useEffect, useState } from "react";
import { CategoryProps } from "../libs/types";
import { useFetch } from "../libs/hooks";

function ResultsSummary() {
  const [totalScore, setTotalScore] = useState<number>(0);
  const {
    data: categories,
    loading,
    error,
  } = useFetch<CategoryProps[]>(`src/data.json`);

  const handleTotalScore = (categories: CategoryProps[]) => {
    return (
      categories.reduce(
        (accumulator, categoryItem) => (accumulator += categoryItem.score),
        0
      ) / categories.length
    );
  };

  useEffect(() => {
    if (categories && categories.length > 0) {
      const total = handleTotalScore(categories);
      setTotalScore(Math.round(total));
    }
  }, [categories]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {categories && (
        <div className="results-summary">
          <section id="your-result" className="your-result">
            <h1 className="your-result__heading">Your Result</h1>

            <div className="your-result__content">
              <TotalScore totalScore={totalScore} />
              <Congratulation />
            </div>
          </section>

          <section id="summary" className="summary">
            <h2 className="summary__heading">Summary</h2>

            <ul className="categories-list">
              {categories.map(({ category, score, icon }, index) => (
                <li key={index}>
                  <Category category={category} score={score} icon={icon} />
                </li>
              ))}
            </ul>

            <button className="button">Continue</button>
          </section>
        </div>
      )}
    </>
  );
}

export default ResultsSummary;
