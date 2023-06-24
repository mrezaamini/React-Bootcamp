import React from "react";
import "./Category.css";

function Category({ Icon, title, color, selected }) {
  return (
    <div
      className={`category ${selected && "category--active"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default Category;
