import React from "react";
import Button2 from "../Button2";
import "./Button.css";

function Button(props) {
  const { button2Props } = props;

  return (
    <div className="button">
      <Button2>{button2Props.children}</Button2>
    </div>
  );
}

export default Button;
