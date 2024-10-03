// src/pages/CartPage.js
import React from 'react';

const CartPage = ({ cartItems }) => {
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
