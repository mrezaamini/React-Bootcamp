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

function App() {
  const [user, loading] = useAuthState(auth);

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
