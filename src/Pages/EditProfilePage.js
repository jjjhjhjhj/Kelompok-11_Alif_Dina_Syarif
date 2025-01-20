import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../file/EditProfilePage.css";

const EditProfilePage = () => {
  const navigate = useNavigate();

  // State untuk menyimpan data profil
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  // Ambil data profil dari localStorage saat halaman dimuat
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setName(savedProfile.name || "");
      setEmail(savedProfile.email || "");
      setPhone(savedProfile.phone || "");
      setAddress(savedProfile.address || "");
      setProfileImage(savedProfile.profileImage || null);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Simpan data base64 ke state
      };
      reader.readAsDataURL(file); // Konversi file ke base64
    }
  };

  const handleSave = () => {
    if (!name || !email || !phone || !address) {
      alert("Please fill out all fields before saving!");
      return;
    }

    // Simpan data profil ke localStorage
    const updatedProfile = { name, email, phone, address, profileImage };
    localStorage.setItem("profile", JSON.stringify(updatedProfile));
    alert("Profile saved successfully!");
    navigate("/profile"); // Navigasi kembali ke halaman profil
  };

  return (
    <div className="edit-profile-page">
      <div className="edit-profile-container">
        <h1>Edit Profile</h1>
        <div className="profile-image-container">
          {/* Tampilkan gambar yang diunggah atau placeholder */}
          <img
            src={profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-image"
          />
          <label className="image-upload-label">
            Choose File
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="image-upload-input"
            />
          </label>
        </div>
        <form className="edit-profile-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
            />
          </div>
        </form>
        <div className="form-actions">
          <Button label="Save" onClick={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
