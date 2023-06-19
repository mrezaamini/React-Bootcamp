import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import PostOption from "./PostOption";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function Post({ name, description, message, photosrc }) {
  return (
    <div className="post">
      <div className="post__topBar">
        <Avatar />
        <div className="post__information">
          <h2>{name}i</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttonsContainer">
        <PostOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <PostOption Icon={ChatOutlinedIcon} title="Like" color="gray" />
        <PostOption Icon={ShareOutlinedIcon} title="Like" color="gray" />
        <PostOption Icon={SendOutlinedIcon} title="Like" color="gray" />
      </div>
    </div>
  );
}

export default Post;
