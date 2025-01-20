import React, { useState } from "react";

const PaymentDetails = () => {
  const [paymentData, setPaymentData] = useState({
    refNumber: "",
    ppn: "",
    totalCost: "",
    revenue: ""
  });

  // Simulate a transaction that updates the payment details
  const handleTransaction = () => {
    setPaymentData({
      refNumber: "12345", // Example reference number
      ppn: "Rp 1.000",
      totalCost: "Rp 11.000",
      revenue: "Rp 44.000"
    });
  };

  return (
    <div className="payment-details">
      <h3>Detail Pembayaran</h3>
      <p><strong>No. Ref. Pembayaran:</strong> {paymentData.refNumber || "-"}</p>
      <p><strong>PPn:</strong> {paymentData.ppn || "-"}</p>
      <p><strong>Total Biaya:</strong> {paymentData.totalCost || "-"}</p>
      <p><strong>Pendapatan:</strong> {paymentData.revenue || "-"}</p>
      {/* Button to simulate a transaction */}
      <button onClick={handleTransaction}>Lakukan Transaksi</button>
    </div>
  );
};

export default PaymentDetails;
