import React from "react";
import "./LeftbarItem.css";

function LeftbarItem({ Icon, title, number, picked }) {
  return (
    <div className={`leftbarItem ${picked && "leftbarItem--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default LeftbarItem;
