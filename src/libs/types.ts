import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface CategoryProps {
  category: string;
  score: number;
  icon: string;
}

export interface TotalScoreProps {
  totalScore: number;
}
