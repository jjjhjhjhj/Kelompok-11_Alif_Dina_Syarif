import React, { createContext, useContext, useState } from "react";

// Membuat konteks untuk transaksi
const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    {
      tanggal: "2023-01-01",
      kategori: "Gaji",
      keterangan: "Gaji bulan Januari",
      pemasukan: 500000,
      pengeluaran: 0,
    },
    {
      tanggal: "2023-02-01",
      kategori: "Belanja",
      keterangan: "Belanja bulanan",
      pemasukan: 0,
      pengeluaran: 300000,
    },
    // Tambahkan data dummy lainnya jika perlu
  ]);

  // Fungsi untuk menambah transaksi
  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  // Fungsi untuk mengedit transaksi berdasarkan indeks
  const editTransaction = (index, updatedTransaction) => {
    setTransactions((prev) =>
      prev.map((transaction, i) =>
        i === index ? { ...transaction, ...updatedTransaction } : transaction
      )
    );
  };

  // Fungsi untuk menghapus transaksi berdasarkan indeks
  const deleteTransaction = (index) => {
    setTransactions((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        editTransaction,
        deleteTransaction,
        setTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

// Hook untuk menggunakan konteks transaksi
export const useTransaction = () => {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error(
      "useTransaction harus digunakan di dalam TransactionProvider"
    );
  }

  return context;
};
