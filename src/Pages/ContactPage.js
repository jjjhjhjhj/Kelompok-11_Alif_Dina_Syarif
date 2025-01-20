import React from "react";
import "../file/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="about-section">
        <h2>Tentang Kami</h2>
        <p>
          Mandan Koding adalah channel berbagi tutorial seputar pemrograman.
          Bantu kami dengan men Subscribe, Like, dan Share.
        </p>
      </div>
      <div className="contact-section">
        <h2>Hubungi Kami</h2>
        <form>
          <input type="text" placeholder="Nama" required />
          <input type="email" placeholder="Alamat Email" required />
          <input type="text" placeholder="Perusahaan" />
          <input type="tel" placeholder="Telepon" required />
          <textarea placeholder="Pesan" required></textarea>
          <button type="submit">KIRIM</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
