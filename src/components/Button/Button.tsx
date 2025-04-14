import { FC } from "react";
import { IButton } from "./Button.types";

export const Button: FC<IButton> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
