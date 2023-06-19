import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import PostOption from "./PostOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed__postContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
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
      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="mreza amini"
        description="test"
        message="wow nice"
        photosrc=""
      />
    </div>
  );
}

export default Feed;
