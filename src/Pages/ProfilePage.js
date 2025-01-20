import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../file/ProfilePage.css";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    profileImage: null,
  });

  useEffect(() => {
    // Retrieve saved profile from localStorage
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/edit-profile"); // Navigate to the Edit Profile page
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-picture">
            <img
              src={profile.profileImage || "https://via.placeholder.com/150"}
              alt="Profile"
            />
          </div>
          <h2>{profile.name || "John Doe"}</h2>
          <p className="profile-email">{profile.email || "johndoe@example.com"}</p>
          <Button label="Edit Profile" onClick={handleEditProfile} />
        </div>

        <div className="profile-body">
          <h3>Personal Information</h3>
          <div className="profile-info">
            <p><strong>Nama Panjang:</strong> {profile.name || "John Doe"}</p>
            <p><strong>Email:</strong> {profile.email || "johndoe@example.com"}</p>
            <p><strong>Nomor Telepon:</strong> {profile.phone || "+123456789"}</p>
            <p><strong>Alamat:</strong> {profile.address || "No Address Provided"}</p>
          </div>
        </div>

        <div className="profile-footer">
          <h3>Recent Activities</h3>
          <ul>
            <li>Updated profile picture</li>
            <li>Changed email address</li>
            <li>Subscribed to premium plan</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
