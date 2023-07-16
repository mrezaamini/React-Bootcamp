import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import { styled } from "styled-components";
import SideBar from "./SideBar";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Body>
          <SideBar />
          <Routes>
            <Route path="/" exact Component={Chat} />
          </Routes>
        </Body>
      </Router>
    </div>
  );
}

export default App;

const Body = styled.div`
  display: flex;
  height: 100vh;
`;
