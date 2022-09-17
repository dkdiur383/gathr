import React from "react";
import Catchhouselogo from "../Catchhouselogo";
import Button from "../Button";
import Button3 from "../Button3";
import Button5 from "../Button5";
import WelcomeScrollingContent from "../WelcomeScrollingContent";
import "./Welcome.css";

function Welcome(props) {
  const {
    frame9612,
    catchhouselogoProps,
    button1Props,
    button2Props,
    button3Props,
    button3Props2,
    button5Props,
    welcomeScrollingContentProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="welcome screen">
        <div className="header">
          <div className="frame-8800">
            <div className="logo-buttons">
              <div className="frame-8791">
                <div className="frame-8807">
                  <div className="catchup">
                    <Catchhouselogo group7721={catchhouselogoProps.group7721} />
                  </div>
                </div>
                <div className="frame-8790">
                  <Button button2Props={button1Props.button2Props} />
                  <Button button2Props={button2Props.button2Props} />
                  <Button button2Props={button3Props.button2Props} />
                </div>
              </div>
              <div className="frame-8792">
                <Button3 button4Props={button3Props2.button4Props} />
                <Button5 button4Props={button5Props.button4Props} />
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <img className="frame-9612" src={frame9612} />
        <div className="overlap-group3">
          <div className="frame-4947">
            <WelcomeScrollingContent {...welcomeScrollingContentProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
