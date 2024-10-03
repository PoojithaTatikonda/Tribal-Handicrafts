// src/pages/AdminCustomers.js
import React from 'react';
import './AdminCustomers.css';

const AdminCustomers = () => {
  const customers = [
    { id: 1, name: 'ram', email: 'ram@gmail.com',password: '12345'},
    { id: 2, name: 'krish', email: 'krish@example.com',password: '54321' },
    { id: 3, name: 'sai', email: 'sai@example.com',password: '14523' },
    { id: 4, name: 'hanuman', email: 'hanuman@example.com',password: '14343' },
  ];

  return (
    <div className="admin-customers">
      <h2>View Customers</h2>
      {customers.map((customer) => (
        <div key={customer.id} className="customer-box">
          <table className="customer-table">
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{customer.name}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{customer.email}</td>
              </tr>
              <tr>
                <th>Password:</th>
                <td>{customer.password}</td> {/* Assuming 'password' field is available */}
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};
export default AdminCustomers;
