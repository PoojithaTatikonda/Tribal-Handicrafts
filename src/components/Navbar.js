import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Navbar.css';
import profileIcon from '../assets/propic.jpg'; // Add profile icon


const Navbar = ({ isAuthenticated ,onLogout,cartItems=[],adminAuthenticated}) => {

  const navigate = useNavigate(); // Initialize useNavigate inside the component

  const handleLogout = () => {
    onLogout(navigate); // Call onLogout and pass navigate to redirect
  };

  
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        {!isAuthenticated && <li><Link to="/signin">Sign In</Link></li>}
        {!isAuthenticated && <li><Link to="/signup">Sign Up</Link></li>}
        {isAuthenticated && (
          <>
            <li><Link to="/items">Items</Link></li>
            <li>
              <li className="profile-icon-container">
  <Link to="/profile">
    <img src={profileIcon} alt="Profile" className="profile-icon" />
  </Link>
</li>

            </li>
          </>
        )}
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        
        
        
            
        {isAuthenticated && (
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}

{adminAuthenticated && (
          <>
            <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
            <li>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
        
      </ul>
    </nav>
  );
};

export default Navbar;
