import React from "react";
import "../file/DashboardCard.css";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="dashboard-card">
      <div className="icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
