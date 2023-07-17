import React from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CapturePreview from "./CapturePreview";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="body">
          <Routes>
            <Route path="/" exact Component={WebcamCapture} />
            <Route path="/capturePrv" Component={CapturePreview} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
