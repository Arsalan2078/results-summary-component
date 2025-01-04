import { SectionProps } from "../libs/types";
import styles from "./Section.module.css";

function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      {children}
    </section>
  );
}

export default Section;
