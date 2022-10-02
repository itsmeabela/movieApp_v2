import React from "react";
import PropTypes from "prop-types";
//styles
import { Wrapper } from "./Button.style";
const Button = ({ text, handleClick }) => {
  return (
    <Wrapper type="button" onClick={handleClick}>
      {text}
    </Wrapper>
  );
};
Button.prototype = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};
export default Button;
