import React from "react";
import "../file/ActionButton.css";

const ActionButton = ({ type, onClick, label }) => {
  const getClassName = () => {
    switch (type) {
      case "add":
        return "btn btn-add";
      case "edit":
        return "btn btn-edit";
      case "delete":
        return "btn btn-delete";
      default:
        return "btn";
    }
  };

  return (
    <button className={getClassName()} onClick={onClick}>
      {label}
    </button>
  );
};

export default ActionButton;
