import React, { useEffect } from "react";
import "./MessageView.css";
import { useSelector } from "react-redux";
import { selectTargetImage } from "./features/snapSlice";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function MessageView() {
  const targetImage = useSelector(selectTargetImage);
  const navigate = useNavigate();

  useEffect(() => {
    if (!targetImage) {
      back();
    }
  }, [targetImage]);

  const back = () => {
    navigate("/messages");
  };
  return (
    <div className="messageView">
      <img src={targetImage} onClick={back} alt="" />
      <div className="messageView__timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={3}
          size={20}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              back();
            }
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default MessageView;
