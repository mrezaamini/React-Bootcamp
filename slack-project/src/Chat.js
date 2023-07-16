import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector } from "react-redux";
import ChatInput from "./ChatInput";
import { selectRoomNum } from "./features/channelSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "./firebase";
import Message from "./Message";

function Chat() {
  const roomNum = useSelector(selectRoomNum);
  const [roomInfo] = useDocument(
    roomNum && db.collection("channels").doc(roomNum)
  );
  const chatRefrence = useRef(null);
  const [messages, loading] = useCollection(
    roomNum &&
      db
        .collection("channels")
        .doc(roomNum)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRefrence?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomNum, loading]);
  return (
    <ChatContainer>
      {roomInfo && messages && (
        <>
          <Header>
            <LeftSection>
              <h4>
                <strong>#{roomInfo?.data().name}</strong>
                <StarBorderOutlinedIcon />
              </h4>
            </LeftSection>
            <RightSection>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </RightSection>
          </Header>
          <ChatMessages>
            {messages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}

            <Chatbuttom ref={chatRefrence} />
          </ChatMessages>
          <ChatInput
            chatRefrence={chatRefrence}
            name={roomInfo?.data().name}
            channelNum={roomNum}
          />
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const RightSection = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 20px;
  }
`;

const ChatMessages = styled.div``;

const Chatbuttom = styled.div`
  padding: 200px;
`;
