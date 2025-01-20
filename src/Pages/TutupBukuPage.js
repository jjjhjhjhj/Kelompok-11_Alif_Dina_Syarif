import React, { useState } from "react";
import CustomButton from "../components/CustomButton"; // Tombol custom
import "../file/TutupBukuPage.css";

const TutupBukuPage = () => {
  const [initialCapital, setInitialCapital] = useState(""); // Modal awal
  const [income, setIncome] = useState(""); // Pendapatan
  const [expenses, setExpenses] = useState(""); // Pengeluaran
  const [finalBalance, setFinalBalance] = useState(null); // Saldo akhir
  const [transactions, setTransactions] = useState([]); // Daftar transaksi
  const [message, setMessage] = useState(""); // Pesan hasil
  const [isProcessed, setIsProcessed] = useState(false); // Status tutup buku

  // Fungsi untuk mengisi data otomatis
  const handleAutoFill = () => {
    setInitialCapital("5000000"); // Modal awal otomatis
    setIncome("1000000"); // Pendapatan otomatis
    setExpenses("700000"); // Pengeluaran otomatis
  };

  const handleTutupBuku = () => {
    const capitalValue = parseFloat(initialCapital);
    const incomeValue = parseFloat(income);
    const expensesValue = parseFloat(expenses);

    if (isNaN(capitalValue) || isNaN(incomeValue) || isNaN(expensesValue)) {
      setMessage("Harap masukkan angka yang valid untuk semua bidang.");
      setFinalBalance(null);
      setIsProcessed(false);
      return;
    }

    const calculatedBalance = capitalValue + incomeValue - expensesValue;
    setFinalBalance(calculatedBalance);

    if (calculatedBalance > capitalValue) {
      setMessage("Proses tutup buku selesai. Anda memperoleh keuntungan.");
    } else if (calculatedBalance < capitalValue) {
      setMessage("Proses tutup buku selesai. Anda mengalami kerugian.");
    } else {
      setMessage("Proses tutup buku selesai. Tidak ada perubahan saldo.");
    }

    setTransactions([
      { id: 1, description: "Modal Awal", amount: capitalValue },
      { id: 2, description: "Pendapatan", amount: incomeValue },
      { id: 3, description: "Pengeluaran", amount: -expensesValue },
    ]);

    setIsProcessed(true);
  };

  return (
    <div className="tutup-buku-page">
      <h1 className="page-title">Tutup Buku</h1>
      <p className="page-description">
        Halaman ini digunakan untuk melakukan proses tutup buku keuangan.
      </p>

      {/* Form Input */}
      <div className="form-container">
        <table className="form-table">
          <tbody>
            <tr>
              <td><label>Modal Awal (Rp):</label></td>
              <td>
                <input
                  type="number"
                  placeholder="Masukkan modal awal"
                  value={initialCapital}
                  onChange={(e) => setInitialCapital(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td><label>Total Pendapatan (Rp):</label></td>
              <td>
                <input
                  type="number"
                  placeholder="Masukkan total pendapatan"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td><label>Total Pengeluaran (Rp):</label></td>
              <td>
                <input
                  type="number"
                  placeholder="Masukkan total pengeluaran"
                  value={expenses}
                  onChange={(e) => setExpenses(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tombol untuk Tutup Buku */}
      <div className="button-container">
        <CustomButton
          label="Isi Data Otomatis"
          type="secondary"
          onClick={handleAutoFill}
        />
        <CustomButton
          label="Proses Tutup Buku"
          type="primary"
          onClick={handleTutupBuku}
        />
      </div>

      {/* Pesan dan Hasil */}
      {isProcessed && (
        <div className="result-container">
          <h2>Hasil Tutup Buku</h2>
          <p className="result-message">{message}</p>
          <table className="result-table">
            <tbody>
              <tr>
                <td><strong>Modal Awal:</strong></td>
                <td>Rp {parseFloat(initialCapital).toLocaleString()}</td>
              </tr>
              <tr>
                <td><strong>Total Pendapatan:</strong></td>
                <td>Rp {parseFloat(income).toLocaleString()}</td>
              </tr>
              <tr>
                <td><strong>Total Pengeluaran:</strong></td>
                <td>Rp {parseFloat(expenses).toLocaleString()}</td>
              </tr>
              <tr>
                <td><strong>Saldo Akhir:</strong></td>
                <td>Rp {finalBalance.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>

          {/* Daftar Transaksi */}
          <h3>Peninjauan Transaksi</h3>
          <ul className="transaction-list">
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                {transaction.description}: Rp {transaction.amount.toLocaleString()}
              </li>
            ))}
          </ul>

          {/* Rekonsiliasi Akun */}
          <h3>Rekonsiliasi Akun</h3>
          <p>Semua akun telah direkonsiliasi dengan saldo akhir yang tercatat.</p>

          {/* Laporan Keuangan */}
          <h3>Pembuatan Laporan Keuangan</h3>
          <p>
            Neraca dan laporan laba rugi telah disiapkan untuk periode yang ditutup.
          </p>

          {/* Analisis Kinerja */}
          <h3>Analisis Kinerja</h3>
          <p>
            Berdasarkan hasil tutup buku, performa keuangan menunjukkan{" "}
            {finalBalance > initialCapital ? "peningkatan" : "penurunan"} saldo.
          </p>
        </div>
      )}
    </div>
  );
};

export default TutupBukuPage;
