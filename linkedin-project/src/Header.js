import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import linkedinLogo from "./assets/linkedin-logo.png";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={linkedinLogo} alt="linkedin-icon" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderItem Icon={HomeIcon} title="Home" />
        <HeaderItem Icon={SupervisorAccountIcon} title="My Network" />
      </div>
    </div>
  );
}

export default Header;
