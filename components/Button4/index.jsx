import React from "react";
import "./Button4.css";

function Button4(props) {
  const { children, className } = props;

  return (
    <div className={`button-3 ${className || ""}`}>
      <div className="label-1 valign-text-middle">{children}</div>
    </div>
  );
}

export default Button4;
