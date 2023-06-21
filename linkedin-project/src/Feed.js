import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import PostOption from "./PostOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [textInput, setTextInput] = useState("");
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: textInput,
      photosrc: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTextInput("");
  };

  return (
    <div className="feed">
      <div className="feed__postContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__postOptions">
          <PostOption title="Photo" Icon={ImageIcon} color="70b5f9" />
          <PostOption title="Video" Icon={SubscriptionsIcon} color="e7a33e" />
          <PostOption title="Event" Icon={EventNoteIcon} color="c0cbcd" />
          <PostOption
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="7fc15e"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photosrc } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photosrc={photosrc}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
