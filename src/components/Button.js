import React from "react";
import "../styles/Button.scss";

const Button = ({ value, classColor, onClick }) => {
  return (
    <button className={classColor} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
