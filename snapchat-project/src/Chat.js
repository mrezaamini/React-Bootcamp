import React from "react";
import "./Chat.css";
import { Avatar } from "@mui/material";

function Chat({ id, username, timestamp, read, imageurl, profilePic }) {
  return (
    <div className="chat">
      <Avatar src="profilePic" />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>Tap to View - </p>
      </div>
    </div>
  );
}

export default Chat;
