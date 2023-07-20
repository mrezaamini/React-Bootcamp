import React, { useEffect, useState } from "react";
import "./Messages.css";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { auth, db } from "./firebase";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/snapSlice";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useNavigate } from "react-router-dom";
import { resetCapturedImage } from "./features/captureSlice";

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

  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const snapShot = () => {
    dispatch(resetCapturedImage());
    navigate("/");
  };

  return (
    <>
      <div className="messages">
        <div className="messages__header">
          <Avatar
            style={{ cursor: "pointer" }}
            src={user.profilePic}
            onClick={() => {
              auth.signOut();
            }}
            className="messages__avatar"
          />
          <div className="messages__search">
            <SearchIcon className="messages__searchIcon" />
            <input placeholder="Friends" />
          </div>
          <ChatBubbleIcon className="messages__chatIcon" />
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
        <RadioButtonUncheckedIcon
          onClick={snapShot}
          className="messages__button"
          fontSize="large"
        />
      </div>
    </>
  );
}

export default Messages;
