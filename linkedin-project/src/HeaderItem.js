import React from "react";
import "./HeaderItem.css";

function HeaderItem({ Icon, title }) {
  return (
    <div className="headerItem">
      {Icon && <Icon className="headerItem__icon" />}
      <h3 className="headerItem__header">{title}</h3>
    </div>
  );
}

export default HeaderItem;
