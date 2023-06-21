import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsItem = (heading, description) => (
    <div className="widgets__newsItem">
      <div className="widgets__newsL">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__newsR">
        <h4>{heading}</h4>
        <p>{description}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__title">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsItem("Linkedin is up and running", "Top news - 10,983 readers")}
      {newsItem("Ai changing our lives", "Top news - 9,873 readers")}
      {newsItem("Etherum rises", "Crypto - 5,875 readers")}
      {newsItem("Harry Potter in the city", "Stories - 3,948 readers")}
      {newsItem("COVID-19 LOCKDOWN", "Top news - 2,844 readers")}
    </div>
  );
}

export default Widgets;
