import React from "react";
import { TextWrapper, TextSpanWrapper } from "./text.style";

const Text = ({ mode = "p", children, ...props }) => {
  const Wrapper = mode === "p" ? TextWrapper : TextSpanWrapper;
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Text;
