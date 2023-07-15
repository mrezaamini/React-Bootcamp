import React from "react";
import { styled } from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SideBarRow from "./SideBarRow";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>SLACK PROJECT</h2>
          <h3>
            <FiberManualRecordIcon />
            Mrezaamini
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>

      <SideBarRow Icon={InsertCommentIcon} title="Threads" />
      <SideBarRow Icon={InboxIcon} title="Mentions & Reactions" />
      <SideBarRow Icon={DraftsIcon} title="Saved Items" />
      <SideBarRow Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SideBarRow Icon={PeopleAltIcon} title="People & User Groups" />
      <SideBarRow Icon={AppsIcon} title="Apps" />
      <SideBarRow Icon={FileCopyIcon} title="File Browser" />
      <SideBarRow Icon={ExpandLessIcon} title="Show Less" />

      <hr />
      <SideBarRow Icon={ExpandMoreIcon} title="Channels" />
      <hr />

      <SideBarRow Icon={AddIcon} addChannelBool title="Add Channel" />
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SideBarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
