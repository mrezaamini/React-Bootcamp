import { Button } from "@mui/material";
import React, { useRef } from "react";
import styled from "styled-components";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

function ChatInput({ name, channelNum, chatRefrence }) {
  const inputRefrence = useRef(null);
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelNum) {
      return false;
    }
    db.collection("channels").doc(channelNum).collection("messages").add({
      message: inputRefrence.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Alexander Turner",
      userImage:
        "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?s=170667a&w=0&k=20&c=wGndZPrloollsXEV3d8i9CwGZfn0ewOFHjBu1AK3pRI=",
    });

    chatRefrence.current.scrollIntoView({
      behavior: "smooth",
    });

    if (inputRefrence.current) {
      inputRefrence.current.value = "";
    }
  };
  return (
    <ChatInputContainer>
      <form>
        <input ref={inputRefrence} placeholder={`Message #${name}`} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
