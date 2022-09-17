import React from "react";
import "./IcSocialFb.css";

function IcSocialFb(props) {
  const { src } = props;

  return (
    <div className="ic-social">
      <img className="x-negative" src={src} />
    </div>
  );
}

export default IcSocialFb;
