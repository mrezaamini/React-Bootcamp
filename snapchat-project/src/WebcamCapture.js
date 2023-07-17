import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import "./WebcamCapture.css";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { setCapturedImage } from "./features/captureSlice";
import { useNavigate } from "react-router-dom";
const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

function WebcamCapture() {
  const navigate = useNavigate();
  const webcamRefrence = useRef(null);
  const dispatch = useDispatch();
  const capture = useCallback(() => {
    const capturedImage = webcamRefrence.current.getScreenshot();
    dispatch(setCapturedImage(capturedImage));
    navigate("/captureprv");
  }, [webcamRefrence]);

  const [image, setImage] = useState(null);

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRefrence}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />

      <RadioButtonUncheckedIcon
        className="webcam__button"
        onClick={capture}
        fontSize="large"
      />
    </div>
  );
}

export default WebcamCapture;
