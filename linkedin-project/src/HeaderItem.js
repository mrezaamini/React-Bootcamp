import React from "react";
import "./HeaderItem.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";

function HeaderItem({ Icon, title, profIcon, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerItem">
      {Icon && <Icon className="headerItem__icon" />}
      {user && profIcon && (
        <Avatar className="headerItem__icon" src={user.photoURL} />
      )}
      <h3 className="headerItem__title">{title}</h3>
    </div>
  );
}

export default HeaderItem;
