import React from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CapturePreview from "./CapturePreview";
import Messages from "./Messages";
import MessageView from "./MessageView";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="body">
          <Routes>
            <Route path="/" exact Component={WebcamCapture} />
            <Route path="/capturePrv" Component={CapturePreview} />
            <Route path="/messages" Component={Messages} />
            <Route path="/messages/chat" Component={MessageView} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
