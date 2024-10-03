// src/pages/PaymentPage.js
import React, { useState } from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // Implement payment logic here
    alert(`Payment Successful using ${paymentMethod}`);
  };

  return (
    <div className="payment-container">
      <h2>Choose Payment Method</h2>
      <form onSubmit={handlePayment}>
        <label>
          <input
            type="radio"
            value="Credit Card"
            checked={paymentMethod === 'Credit Card'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            value="Debit Card"
            checked={paymentMethod === 'Debit Card'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Debit Card
        </label>
        <label>
          <input
            type="radio"
            value="UPI"
            checked={paymentMethod === 'UPI'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          UPI
        </label>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;
