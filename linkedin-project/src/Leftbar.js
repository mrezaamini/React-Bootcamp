import React from "react";
import "./Leftbar.css";
import { Avatar } from "@mui/material";
import { selectUser } from "./features/user/userSlice";
import { useSelector } from "react-redux";

function Leftbar() {
  const user = useSelector(selectUser);
  const recentProject = (topic) => (
    <div className="leftbar__recentProject">
      <span className="leftbar__tag">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="leftbar">
      <div className="leftbar__above">
        <img
          src="https://images.unsplash.com/photo-1581898975010-1446955616ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="background"
        />
        <Avatar src={user.photoURL} className="leftbar__avatar" />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="leftbar__stats">
        <div className="leftbar__container">
          <p>Who viewed you</p>
          <p className="leftbar__containerNum">3,500</p>
        </div>
        <div className="leftbar__container">
          <p>Views on post</p>
          <p className="leftbar__containerNum">3,400</p>
        </div>
      </div>
      <div className="leftbar__down">
        <p>Recent</p>
        {recentProject("software engineering")}
        {recentProject("developer")}
        {recentProject("full-stack")}
        {recentProject("reactjs")}
        {recentProject("redux")}
        {recentProject("firebase")}
      </div>
    </div>
  );
}

export default Leftbar;
