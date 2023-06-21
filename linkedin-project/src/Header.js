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
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/user/userSlice";
import { auth } from "./firebase";

function Header() {
  const user = useSelector(selectUser);
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
        {user && <HeaderItem onClick={appLogout} profIcon="true" title="me" />}
      </div>
    </div>
  );
}

export default Header;
