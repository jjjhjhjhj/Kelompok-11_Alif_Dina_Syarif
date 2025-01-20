import React, { useState } from "react";

const OrderDetails = () => {
  const [order, setOrder] = useState({
    id: "FP-43507",
    grossIncome: 55000,
    transactionId: "1bec1fd9-7786-4eba-ce0e-129c2253051d",
    paymentType: "GoPay",
    dateTime: "06 May 2021, 17:03",
    status: "Settlement",
  });

  const handleClearOrder = () => {
    setOrder({
      id: "",
      grossIncome: 0,
      transactionId: "",
      paymentType: "",
      dateTime: "",
      status: "",
    });
  };

  return (
    <div className="order-details">
      <h3>Detail Pesanan</h3>
      <p>
        <strong>ID Pesanan:</strong> {order.id || "-"}
      </p>
      <p>
        <strong>Pendapatan Kotor:</strong> Rp {order.grossIncome || "-"}
      </p>
      <p>
        <strong>ID Transaksi:</strong> {order.transactionId || "-"}
      </p>
      <p>
        <strong>Tipe Pembayaran:</strong> {order.paymentType || "-"}
      </p>
      <p>
        <strong>Tanggal & Waktu:</strong> {order.dateTime || "-"}
      </p>
      <p>
        <strong>Status Transaksi:</strong>{" "}
        <span className={`status-${order.status.toLowerCase()}`}>
          {order.status || "-"}
        </span>
      </p>
      <button onClick={handleClearOrder} className="clear-button">
        Selesai Transaksi
      </button>
    </div>
  );
};

export default OrderDetails;
