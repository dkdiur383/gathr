import React from "react";
import Button4 from "../Button4";
import "./Button5.css";

function Button5(props) {
  const { button4Props } = props;

  return (
    <div className="button-5">
      <Button4 className={button4Props.className}>{button4Props.children}</Button4>
    </div>
  );
}

export default Button5;
