import React from "react";
import { ButtonWrapper } from "./button.style";

const Button = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
