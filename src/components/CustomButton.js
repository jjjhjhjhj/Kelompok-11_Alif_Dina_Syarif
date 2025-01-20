import React from "react";
import "../file/CustomButton.css";

const CustomButton = ({ label, type = "primary", onClick }) => {
  return (
    <button className={`button button-${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;
