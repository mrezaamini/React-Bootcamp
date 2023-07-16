import React from "react";
import { styled } from "styled-components";
import { db } from "./firebase";

function SideBarRow({ Icon, addChannelBool, title, id }) {
  const addChannel = () => {
    const name = prompt("Enter Channel Name");
    if (name) {
      db.collection("channels").add({
        name: name,
      });
    }
  };
  const selectChannel = () => {};

  return (
    <SideBarRowContainer onClick={addChannelBool ? addChannel : selectChannel}>
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SideBarRowChannel>
          <span>#</span> {title}
        </SideBarRowChannel>
      )}
    </SideBarRowContainer>
  );
}

export default SideBarRow;

const SideBarRowContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SideBarRowChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
