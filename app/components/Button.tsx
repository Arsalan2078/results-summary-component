import { AnchorHTMLAttributes } from "react";
import styles from "./Button.module.scss";

export default function Button({
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={`${styles.button} rounded-full bold`} {...props}></a>;
}
