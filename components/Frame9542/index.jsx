import React from "react";
import Badge from "../Badge";
import Badge2 from "../Badge2";
import Badge3 from "../Badge3";
import AvatarStacked from "../AvatarStacked";
import Frame9498 from "../Frame9498";
import "./Frame9542.css";

function Frame9542(props) {
  const { frame9570, image1893, calendar, i2000500738193720004903314204433131, className, avatarStackedProps } = props;

  return (
    <div className={`frame-9543 ${className || ""}`}>
      <div className="frame-9573">
        <div className="frame-9570" style={{ backgroundImage: `url(${frame9570})` }}></div>
        <div className="frame-95">
          <div className="frame-9571">
            <div className="frame-9539">
              <p className="yc-and-500-founders-launch-house inter-medium-black-11-6px">500 Startup Batch 7 Reunion</p>
            </div>
            <div className="frame-95">
              <div className="frame-9587">
                <img className="image-1893" src={image1893} />
                <div className="frame-9586">
                  <div className="name inter-bold-black-8-7px">John Doe</div>
                  <p className="ceo-founder-give inter-medium-slate-gray-7-2px">
                    CEO &amp; Founder @ Givesurance services inc.
                  </p>
                  <div className="address-3 inter-medium-slate-gray-7-2px">500 Batch 10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-9546">
          <Badge />
          <Badge2 />
          <Badge3 />
        </div>
        <div className="frame-29">
          <div className="address valign-text-middle inter-normal-black-16px">1 RSVPs</div>
          <AvatarStacked
            avatar1Props={avatarStackedProps.avatar1Props}
            avatar2Props={avatarStackedProps.avatar2Props}
            avatar3Props={avatarStackedProps.avatar3Props}
            avatar4Props={avatarStackedProps.avatar4Props}
          />
        </div>
        <div className="frame-9521">
          <div className="address-1 roboto-bold-black-10-1px">30 days</div>
          <img className="calendar" src={calendar} />
          <p className="address-2 valign-text-middle inter-normal-santas-gray-14px">16 Sept 2022 - 16 Sept 2022</p>
          <img className="x-2" src={i2000500738193720004903314204433131} />
        </div>
        <div className="frame-9588">
          <div className="frame-9542">
            <div className="frame-9553">
              <Frame9498 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame9542;
