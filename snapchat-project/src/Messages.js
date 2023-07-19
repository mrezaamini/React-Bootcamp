import React, { useEffect, useState } from "react";
import "./Messages.css";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { db } from "./firebase";
import Chat from "./Chat";

function Messages() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    console.log(posts);
  }, []);
  return (
    <div className="messages">
      <div className="messages__header">
        <Avatar className="messages__avatar" />
        <div className="messages__search">
          <SearchIcon />
          <input placeholder="Friends" />
        </div>
        <ChatBubbleIcon className="messages_chatIcon" />
      </div>
      <div className="messages__posts">
        {posts.map(
          ({
            id,
            data: { profilePic, username, timestamp, imageurl, read },
          }) => {
            console.log(imageurl);
            return (
              <Chat
                key={id}
                id={id}
                username={username}
                timestamp={timestamp}
                imageurl={imageurl}
                read={read}
                profilePic={profilePic}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default Messages;
