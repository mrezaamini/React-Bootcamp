import React from "react";
import "./HeaderItem.css";
import { Avatar } from "@mui/material";

function HeaderItem({ Icon, title, avatar }) {
  return (
    <div className="headerItem">
      {Icon && <Icon className="headerItem__icon" />}
      {avatar && <Avatar className="headerItem__icon" src={avatar} />}
      <h3 className="headerItem__title">{title}</h3>
    </div>
  );
}

export default HeaderItem;
