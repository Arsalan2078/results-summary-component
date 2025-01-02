import { useEffect, useState } from "react";
import { CategoryProps } from "../libs/types";
import { useFetch } from "../libs/hooks";
import SectionYourResult from "./SectionYourResult";
import SectionSummary from "./SectionSummary";

function ResultsSummary() {
  const [totalScore, setTotalScore] = useState<number>(0);

  // Use the hook to fetch data from data.json
  const {
    data: categories,
    loading,
    error,
  } = useFetch<CategoryProps[]>(`src/data.json`);

  // Use reducer method to sum up scores and divide by length to find average, total score, which is then rounded
  const handleTotalScore = (categories: CategoryProps[]) => {
    return Math.round(
      categories.reduce(
        (accumulator, categoryItem) => (accumulator += categoryItem.score),
        0
      ) / categories.length
    );
  };

  // useFetch to re-render webpage when categories change (only when first loading).
  useEffect(() => {
    if (categories && categories.length > 0) {
      const total = handleTotalScore(categories);
      setTotalScore(total);
    }
  }, [categories]);

  return (
    <>
      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {categories && (
        <div className="results-summary">
          <SectionYourResult totalScore={totalScore} />
          <SectionSummary categories={categories} />
        </div>
      )}
    </>
  );
}

export default ResultsSummary;
