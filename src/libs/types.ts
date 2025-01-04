import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface ClassNameProps {
  className: string;
}

export interface IdProps {
  id: string;
}

export interface SectionProps extends IdProps, ClassNameProps, ChildrenProps {}
