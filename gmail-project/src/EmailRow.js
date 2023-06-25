import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import { useNavigate } from "react-router-dom";

function EmailRow({ title, subject, description, time, id }) {
  const navigate = useNavigate();
  return (
    <div className="emailrow" onClick={() => navigate("/mail")}>
      <div className="emailrow__buttons">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailrow__title">{title}</h3>
      <div className="emailrow__message">
        <h4>
          {subject}{" "}
          <span className="emailrow__description">- {description}</span>
        </h4>
      </div>
      <div className="emailrow__time">{time}</div>
    </div>
  );
}

export default EmailRow;
