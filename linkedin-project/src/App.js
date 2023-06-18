import React from "react";
import "./App.css";
import Header from "./Header";
import Leftbar from "./Leftbar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="linkedin__body">
        <Leftbar />
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
