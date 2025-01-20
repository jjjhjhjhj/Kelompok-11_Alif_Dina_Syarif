import React, { useState } from "react";
import ActionButton from "../components/ActionButton"; // Import komponen tombol
import "../file/ModalPage.css"; // Import file CSS untuk halaman modal

const ModalPage = () => {
  const [modalData, setModalData] = useState([]); // State untuk menyimpan data modal
  const [isFormOpen, setIsFormOpen] = useState(false); // State untuk form modal
  const [newModal, setNewModal] = useState({
    namaModal: "",
    jumlahModal: "",
    deskripsi: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewModal({ ...newModal, [name]: value });
  };

  const handleAddModal = () => {
    if (!newModal.namaModal || !newModal.jumlahModal || !newModal.deskripsi) {
      alert("Harap isi semua data modal!");
      return;
    }

    setModalData([
      ...modalData,
      {
        id: modalData.length + 1,
        ...newModal,
      },
    ]);

    setNewModal({
      namaModal: "",
      jumlahModal: "",
      deskripsi: "",
    });

    setIsFormOpen(false); // Tutup form modal setelah data ditambahkan
  };

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h1>Modal</h1>
        <span>Data Modal Keuangan</span>
      </div>

      <div className="modal-content">
        <h2>Informasi Modal</h2>
        <p>Halaman ini berisi informasi tentang modal yang dimiliki perusahaan.</p>
        <ActionButton
          type="add"
          label="Tambah Modal"
          onClick={() => setIsFormOpen(true)}
        />

        {/* Tabel untuk menampilkan data modal */}
        <table className="modal-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Modal</th>
              <th>Jumlah</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {modalData.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-data">
                  Tidak ada data modal.
                </td>
              </tr>
            ) : (
              modalData.map((modal, index) => (
                <tr key={modal.id}>
                  <td>{index + 1}</td>
                  <td>{modal.namaModal}</td>
                  <td>{modal.jumlahModal}</td>
                  <td>{modal.deskripsi}</td>
                  <td>
                    <ActionButton
                      type="delete"
                      label="Hapus"
                      onClick={() =>
                        setModalData(modalData.filter((item) => item.id !== modal.id))
                      }
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Form untuk menambahkan modal */}
      {isFormOpen && (
        <div className="modal-form-container">
          <div className="modal-form">
            <h3>Tambah Modal Baru</h3>
            <form>
              <label>Nama Modal:</label>
              <input
                type="text"
                name="namaModal"
                value={newModal.namaModal}
                onChange={handleInputChange}
              />
              <label>Jumlah Modal:</label>
              <input
                type="number"
                name="jumlahModal"
                value={newModal.jumlahModal}
                onChange={handleInputChange}
              />
              <label>Deskripsi:</label>
              <textarea
                name="deskripsi"
                value={newModal.deskripsi}
                onChange={handleInputChange}
              ></textarea>
            </form>
            <div className="form-actions">
              <button className="btn-save" onClick={handleAddModal}>
                Simpan
              </button>
              <button
                className="btn-cancel"
                onClick={() => setIsFormOpen(false)}
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

export default ModalPage;
