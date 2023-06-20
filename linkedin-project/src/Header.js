import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import linkedinLogo from "./assets/linkedin-logo.png";
import HeaderItem from "./HeaderItem";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/user/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  const appLogout = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src={linkedinLogo} alt="linkedin-icon" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderItem Icon={HomeIcon} title="Home" />
        <HeaderItem Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderItem Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderItem Icon={ChatIcon} title="Messaging" />
        <HeaderItem Icon={NotificationsIcon} title="Notifications" />
        <HeaderItem
          onClick={appLogout}
          avatar="https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=861&q=80"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
