import React from "react";
import "../file/SignUpButton.css";

const SignUpButton = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default SignUpButton;
