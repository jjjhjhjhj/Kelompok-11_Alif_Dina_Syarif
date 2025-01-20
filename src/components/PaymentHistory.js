import React, { useState } from "react";

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  // Simulate a new transaction to add to the payment history
  const handleTransaction = () => {
    const newTransaction = {
      time: "06 May 2021, 17:03",
      activity: "Settlement Transaction",
      amount: "Rp 55.000",
      result: "Success"
    };
    setPaymentHistory([newTransaction, ...paymentHistory]); // Adds the new transaction to the history
  };

  return (
    <div className="payment-history">
      <h3>Riwayat Pembayaran</h3>
      <table>
        <thead>
          <tr>
            <th>Waktu Transaksi</th>
            <th>Aktivitas</th>
            <th>Jumlah</th>
            <th>Hasil</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.length > 0 ? (
            paymentHistory.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.time}</td>
                <td>{transaction.activity}</td>
                <td>{transaction.amount}</td>
                <td><span className={`status-${transaction.result.toLowerCase()}`}>{transaction.result}</span></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No transactions yet.</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* Button to simulate a transaction */}
      <button onClick={handleTransaction}>Lakukan Transaksi</button>
    </div>
  );
};

export default PaymentHistory;
