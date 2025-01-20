import React from "react";
import { Link } from "react-router-dom";
import "../file/Sidebar.css"; // Import file CSS eksternal untuk styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
        <li>
          <Link to="/transaction">TRANSAKSI</Link>
        </li>
        <li>
          <Link to="/transaksi">PEMASUKAN & PENGELUARAN</Link> {/* Perubahan di sini */}
        </li>
        <li>
          <Link to="/modal">MODAL</Link>
        </li>
        <li>
        <Link to="/tutup-buku">TUTUP BUKU</Link>
        </li>
        <li>
          <Link to="/contact">KONTAK KAMI</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;  