import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact Component={Main} />
          {/* <Route path="/" Component={<h1>about</h1>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
