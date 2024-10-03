import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (email && password && role) {
      navigate('/signin');  // Redirect to sign-in after successful registration
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
      <input
        type="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)} required>
      <option value="customer">Customer</option>
        {/* 
        <option value="staff">Managing Staff</option>
        <option value="admin">Administrator</option> */}
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
