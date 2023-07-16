import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import { styled } from "styled-components";
import SideBar from "./SideBar";
import Chat from "./Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./Login";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <SlackLoad>
        <LoadingContet>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png"
            alt="slack"
          />

          <Spinner name="circle" color="purple" fadeIn="none" />
        </LoadingContet>
      </SlackLoad>
    );
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <Body>
              <SideBar />
              <Routes>
                <Route path="/" exact Component={Chat} />
              </Routes>
            </Body>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const Body = styled.div`
  display: flex;
  height: 100vh;
`;

const SlackLoad = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const LoadingContet = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
