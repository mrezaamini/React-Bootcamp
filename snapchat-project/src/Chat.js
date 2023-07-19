import React from "react";
import "./Chat.css";
import { Avatar } from "@mui/material";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import TimeAgo from "react-timeago";
import { useDispatch } from "react-redux";
import { selectImage } from "./features/snapSlice";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";

function Chat({ id, username, timestamp, read, imageurl, profilePic }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMessage = () => {
    if (!read) {
      dispatch(selectImage(imageurl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );
      navigate("/messages/chat");
    }
  };
  return (
    <div onClick={openMessage} className="chat">
      <Avatar src={profilePic} className="chat__avatar" />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>
          {!read && "Tap to View -"}{" "}
          <TimeAgo date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>
      {!read && <StopRoundedIcon className="chat__read" />}
    </div>
  );
}

export default Chat;
