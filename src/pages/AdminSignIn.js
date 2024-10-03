// src/pages/AdminSignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Placeholder for actual authentication logic
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem('isAdmin', 'true'); // Set admin authentication
      navigate('/admindashboard'); // Redirect to Admin Dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-signin">
      <h2>Admin Sign In</h2>
      <form onSubmit={handleSignIn}>

        <label>
          email: 
        <input 

type="email" 
placeholder="Email" 
value={email} 
onChange={(e) => setEmail(e.target.value)} 
/>
        </label>
       
        <br />
        <br />
        password:
        <input 
       
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <br />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default AdminSignIn;
