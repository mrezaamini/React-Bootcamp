import React, { useEffect } from "react";
import "./CapturePreview.css";
import { useDispatch, useSelector } from "react-redux";
import {
  resetCapturedImage,
  selectCapturedImage,
} from "./features/captureSlice";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CreateIcon from "@mui/icons-material/Create";
import NoteIcon from "@mui/icons-material/Note";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CropIcon from "@mui/icons-material/Crop";
import TimerIcon from "@mui/icons-material/Timer";
import SendIcon from "@mui/icons-material/Send";

function CapturePreview() {
  const capturedImage = useSelector(selectCapturedImage);
  const dispatch = useDispatch();
  const closePrv = () => {
    dispatch(resetCapturedImage());
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!capturedImage) {
      navigate("/");
    }
  }, [capturedImage, navigate]);
  return (
    <div className="prv">
      <CloseIcon className="prv__close" onClick={closePrv} />
      <div className="prv__rightBar">
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>
      <img src={capturedImage} alt="" />
      <div className="prv__footer">
        <h2>Send Now</h2>
        <SendIcon className="prv__send" />
      </div>
    </div>
  );
}

export default CapturePreview;
