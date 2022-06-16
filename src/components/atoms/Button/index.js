import React from "react";
import "./button.scss";

const Button = ({ title, ...rest }) => {
  const cls = rest.variant ? "button btn " + rest.variant : "button";
  return (
    <button className={cls} {...rest}>
      {title}
    </button>
  );
};

export default Button;
