import React from "react";
import Button4 from "../Button4";
import "./Button3.css";

function Button3(props) {
  const { button4Props } = props;

  return (
    <div className="button-2">
      <Button4>{button4Props.children}</Button4>
    </div>
  );
}

export default Button3;
