import React from "react";
import "./Catchhouselogo.css";

function Catchhouselogo(props) {
  const { group7721 } = props;

  return (
    <div className="catchhouselogo">
      <div className="group-7719">
        <div className="frame-9609">
          <div className="up-house">
            <img
              className="x"
              src="https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/-@2x.svg"
            />
            <div className="group-container">
              <div className="overlap-group">
                <div className="rectangle-3147"></div>
                <div className="rectangle-3148"></div>
              </div>
              <img
                className="group-7720"
                src="https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/group-7720-1@2x.svg"
              />
              <div className="group-7721" style={{ backgroundImage: `url(${group7721})` }}></div>
            </div>
          </div>
        </div>
        <img
          className="frame-9613"
          src="https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/frame-9613@2x.svg"
        />
      </div>
    </div>
  );
}

export default Catchhouselogo;
