import React, { useState } from "react";
import { useTransaction } from "../context/TransactionContext";
import ButtonComponent from "../components/ButtonComponent";
import "../file/TransaksiPage.css";

const TransaksiPage = () => {
  const { transactions, addTransaction, setTransactions } = useTransaction();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newTransaction, setNewTransaction] = useState({
    tanggal: "",
    kategori: "",
    keterangan: "",
    pemasukan: "",
    pengeluaran: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleAddTransaction = () => {
    if (
      !newTransaction.tanggal ||
      !newTransaction.kategori ||
      !newTransaction.keterangan ||
      (!newTransaction.pemasukan && !newTransaction.pengeluaran)
    ) {
      alert("Harap isi semua data transaksi!");
      return;
    }

    if (isEditing) {
      const updatedTransactions = [...transactions];
      updatedTransactions[editIndex] = {
        ...newTransaction,
        pemasukan: parseFloat(newTransaction.pemasukan) || 0,
        pengeluaran: parseFloat(newTransaction.pengeluaran) || 0,
      };
      setTransactions(updatedTransactions);
    } else {
      addTransaction({
        ...newTransaction,
        pemasukan: parseFloat(newTransaction.pemasukan) || 0,
        pengeluaran: parseFloat(newTransaction.pengeluaran) || 0,
      });
    }

    setNewTransaction({
      tanggal: "",
      kategori: "",
      keterangan: "",
      pemasukan: "",
      pengeluaran: "",
    });

    setIsModalOpen(false);
    setIsEditing(false);
  };

  const handleEditTransaction = (index) => {
    setEditIndex(index);
    setNewTransaction(transactions[index]);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDeleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Transaksi</h1>
        <span>Data Transaksi</span>
      </div>

      <div className="toolbar">
        <h2>Transaksi Pemasukan & Pengeluaran</h2>
        <div className="toolbar-actions">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="btn btn-add" onClick={() => setIsModalOpen(true)}>
            + Tambah Transaksi
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal</th>
            <th>Kategori</th>
            <th>Keterangan</th>
            <th>Pemasukan</th>
            <th>Pengeluaran</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="7" className="empty-table">
                Tidak ada data transaksi.
              </td>
            </tr>
          ) : (
            transactions.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.tanggal}</td>
                <td>{item.kategori}</td>
                <td>{item.keterangan}</td>
                <td>{item.pemasukan || "-"}</td>
                <td>{item.pengeluaran || "-"}</td>
                <td className="options">
                  <ButtonComponent
                    type="edit"
                    onClick={() => handleEditTransaction(index)}
                  />
                  <ButtonComponent
                    type="delete"
                    onClick={() => handleDeleteTransaction(index)}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{isEditing ? "Edit Transaksi" : "Tambah Transaksi Baru"}</h2>
            <form>
              <label>Tanggal:</label>
              <input
                type="date"
                name="tanggal"
                value={newTransaction.tanggal}
                onChange={handleInputChange}
              />
              <label>Kategori:</label>
              <input
                type="text"
                name="kategori"
                value={newTransaction.kategori}
                onChange={handleInputChange}
              />
              <label>Keterangan:</label>
              <input
                type="text"
                name="keterangan"
                value={newTransaction.keterangan}
                onChange={handleInputChange}
              />
              <label>Pemasukan:</label>
              <input
                type="number"
                name="pemasukan"
                value={newTransaction.pemasukan}
                onChange={handleInputChange}
              />
              <label>Pengeluaran:</label>
              <input
                type="number"
                name="pengeluaran"
                value={newTransaction.pengeluaran}
                onChange={handleInputChange}
              />
            </form>
            <div className="modal-actions">
              <button className="btn btn-save" onClick={handleAddTransaction}>
                Simpan
              </button>
              <button
                className="btn btn-cancel"
                onClick={() => {
                  setIsModalOpen(false);
                  setIsEditing(false);
                }}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransaksiPage;
