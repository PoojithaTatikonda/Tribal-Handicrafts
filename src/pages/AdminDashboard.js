// src/pages/AdminDashboard.js
import React from 'react';
import { Link} from 'react-router-dom';
import './AdminDashboard.css';


const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-options">
      
        <Link to="/adminproducts">Manage Products</Link> 
        <br />
        <br />
        <Link to="/adminorders">Manage Orders</Link>
        <br />
        <br />
        <Link to="/admincustomers">View Customers</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
