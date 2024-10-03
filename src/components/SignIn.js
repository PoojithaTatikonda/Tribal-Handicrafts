import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = ({ setUser, setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    
    // Normally, you'd verify the email and password with a backend API.
    // For now, we'll assume the sign-in is successful if email & password are filled in.
    if (email && password) {
      const user = {
        email: email,
        role: 'customer' // or fetch from backend
      };
      setUser(user);  // Store user data
      setIsAuthenticated(true);  // Set user as authenticated
      
      navigate('/Home');  // Redirect to items page
    } else {
      alert('Please enter your details');
    }
  };

  return (
    <form className="signin-form" onSubmit={handleSignIn}>
      <h2>Sign In</h2>
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
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
