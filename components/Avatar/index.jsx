import React from "react";
import "./Avatar.css";

function Avatar(props) {
  const { src, className } = props;

  return <div className={`ellipse-158-1 ${className || ""}`} style={{ backgroundImage: `url(${src})` }}></div>;
}

export default Avatar;
