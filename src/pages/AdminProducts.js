// src/pages/AdminProducts.js
import React, { useState } from 'react';
import './AdminProducts.css';

const AdminProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 150 },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const editProduct = (id, updatedProduct) => {
    setProducts(products.map(p => (p.id === id ? updatedProduct : p)));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="admin-products">
      <h2>Manage Products</h2>
      {/* Button to add a new product */}
      <button
        onClick={() =>
          addProduct({
            id: 3,
            name: 'New Product',
            description: 'New Description',
            price: 200,
          })
        }
      >
        Add Product
      </button>

      {/* Table to display the products */}
      <table className="products-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>Rs.{product.price}</td>
              <td>
                <button onClick={() => editProduct(product.id, { ...product, name: 'Updated Product' })}>
                  Edit
                </button>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
