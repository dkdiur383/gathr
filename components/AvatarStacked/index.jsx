import React from "react";
import Avatar from "../Avatar";
import "./AvatarStacked.css";

function AvatarStacked(props) {
  const { avatar1Props, avatar2Props, avatar3Props, avatar4Props } = props;

  return (
    <div className="avatar-stacked">
      <div className="overlap-group1-1">
        <Avatar src={avatar1Props.src} className={avatar1Props.className} />
        <Avatar src={avatar2Props.src} className={avatar2Props.className} />
        <Avatar src={avatar3Props.src} className={avatar3Props.className} />
        <Avatar src={avatar4Props.src} className={avatar4Props.className} />
        <div className="overlap-group-2">
          <div className="ellipse-133"></div>
          <div className="number inter-medium-pale-sky-14px">12</div>
        </div>
      </div>
    </div>
  );
}

export default AvatarStacked;
