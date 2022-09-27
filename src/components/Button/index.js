import React from "react";

//styles
import { Wrapper } from "./Button.style";
const Button = ({ text, handleClick }) => {
  return (
    <Wrapper type="button" onClick={handleClick}>
      {text}
    </Wrapper>
  );
};

export default Button;
