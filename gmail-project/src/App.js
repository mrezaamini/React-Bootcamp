import React from "react";
import "./App.css";
import Header from "./Header";
import Leftbar from "./Leftbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailList from "./EmailList";
import Mail from "./Mail";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Leftbar />
          <Routes>
            <Route path="/mail" Component={Mail} />
            <Route path="/" Component={EmailList} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
