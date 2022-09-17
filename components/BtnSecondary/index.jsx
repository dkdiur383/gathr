import React from "react";
import "./BtnSecondary.css";

function BtnSecondary(props) {
  const { children } = props;

  return (
    <div className="btn-secondary">
      <div className="secondary">{children}</div>
    </div>
  );
}

export default BtnSecondary;
