import React, { useState } from 'react';

const Profile = ({ user, updateUser }) => {
  const [name, setName] = useState(user.name);
  const [profileImage, setProfileImage] = useState(user.profileImage);

  const handleSave = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      name,
      profileImage
    };
    updateUser(updatedUser);  // Update user information
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="profile-page">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSave}>
        <div className="profile-image">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="profile-img-preview" />
          ) : (
            <p>No profile image</p>
          )}
          <input type="file" accept="image/*" onChange={handleProfileImageChange} />
        </div>
        
        <br/> 
        <div className="profile-details">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br/> 
          
          <label>
            Role: 
            <strong>{user.role}</strong> 
          </label>
          
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
