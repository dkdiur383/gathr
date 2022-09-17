import React from "react";
import "./Button2.css";

function Button2(props) {
  const { children } = props;

  return (
    <div className="button-1">
      <div className="label valign-text-middle inter-medium-charade-14px">{children}</div>
    </div>
  );
}

export default Button2;
