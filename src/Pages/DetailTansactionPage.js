import React from "react";
import OrderDetails from "../components/OrderDetails";
import PaymentDetails from "../components/PaymentDetails";
import PaymentHistory from "../components/PaymentHistory";
import "../file/DetaulTransactionPage.css";

const DetailTransactionPage = () => {
  return (
    <div className="detail-transaction-container">
      <h1 className="page-title">Detail Transaksi</h1>

      <div className="details-section">
        <OrderDetails />
        <PaymentDetails />
      </div>

      <PaymentHistory />
    </div>
  );
};

export default DetailTransactionPage;
