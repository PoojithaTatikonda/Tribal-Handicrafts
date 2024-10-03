// src/pages/AdminOrders.js
import React from 'react';
import './AdminOrders.css';

const AdminOrders = () => {
  const orders = [
    { id: 1, customer: 'ram', status: 'Pending', total: 150 },
    { id: 2, customer: 'krish', status: 'Delivered', total: 200 },
    { id: 3, customer: 'sai', status: 'Delivered', total: 500 },
  ];

  const updateOrderStatus = (id, newStatus) => {
    // Logic for updating order status
  };

 
    return (
      <div className="admin-orders">
        <h2>Manage Orders</h2>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.status}</td>
                <td>Rs.{order.total}</td>
                <td>
                  <button onClick={() => updateOrderStatus(order.id, 'Shipped')}>Update Status</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default AdminOrders;
