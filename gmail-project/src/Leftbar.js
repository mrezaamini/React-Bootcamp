import React from "react";
import "./Leftbar.css";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import LeftbarItem from "./LeftbarItem";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from "react-redux";
import { openCompose } from "./features/mailSlice";
function Leftbar() {
  const dispatch = useDispatch();

  return (
    <div className="leftbar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="leftbar__compose"
        onClick={() => dispatch(openCompose())}
      >
        Compose
      </Button>
      <LeftbarItem Icon={InboxIcon} title="Inbox" number={54} picked={true} />
      <LeftbarItem Icon={StarIcon} title="Starred" number={54} />
      <LeftbarItem Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <LeftbarItem Icon={LabelImportantIcon} title="Important" number={54} />
      <LeftbarItem Icon={NearMeIcon} title="Sent" number={54} />
      <LeftbarItem Icon={NoteIcon} title="Drafts" number={54} />
      <LeftbarItem Icon={ExpandMoreIcon} title="More" number={54} />
      <div className="leftbar__footer">
        <div className="leftbar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
