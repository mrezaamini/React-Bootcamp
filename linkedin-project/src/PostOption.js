import React from "react";
import "./PostOption.css";

function PostOption({ Icon, color, title }) {
  return (
    <div className="postOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default PostOption;
