import React from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import Category from "./Category";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "./EmailRow";

function EmailList() {
  return (
    <div className="emaillist">
      <div className="emaillist__options">
        <div className="emaillist__optionsL">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>

          <IconButton>
            <RedoIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emaillist__optionsR">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>

          <IconButton>
            <ChevronRightIcon />
          </IconButton>

          <IconButton>
            <KeyboardHideIcon />
          </IconButton>

          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emaillist__categories">
        <Category Icon={InboxIcon} title="Primary" color="red" selected />
        <Category Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Category Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emaillist__emailContainer">
        <EmailRow
          title="title"
          subject="test subj"
          description="test desc"
          time="10pm"
        />
        <EmailRow
          title="title"
          subject="test subj"
          description="test desctest desctest desctest desctest desc test desctest desc"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
