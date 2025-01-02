import { ChildrenProps } from "../libs/types";

function Button({ children }: ChildrenProps) {
  return <button className="button">{children}</button>;
}

export default Button;
