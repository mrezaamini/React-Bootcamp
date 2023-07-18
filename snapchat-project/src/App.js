import React from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CapturePreview from "./CapturePreview";
import Messages from "./Messages";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="body">
          <Routes>
            <Route path="/" exact Component={WebcamCapture} />
            <Route path="/capturePrv" Component={CapturePreview} />
            <Route path="/messages" Component={Messages} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
