import React from "react";
import "../file/Button.css"; // Tambahkan styling untuk tombol

const Button = ({ label, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
