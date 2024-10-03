// src/pages/ItemsPage.js
import React from 'react';
import './ItemsPage.css';

const ItemsPage = ({ addToCart }) => {
  const items = [
    {
      id: 1,
      name: 'SriKrishna Statue',
      image: 'https://m.media-amazon.com/images/I/51OV4L6K2TL._SX300_SY300_QL70_FMwebp_.jpg',
      description: 'A beautiful  statue made by local artisans.',
      price: 1500
    },
    {
      id: 2,
      name: 'Traditional Saree',
      image: 'https://m.media-amazon.com/images/I/71a1RVPdS2L._SY879_.jpg',
      description: 'A traditional handwoven saree made from natural fibers.',
      price: 1200
    },
    {
      id: 3,
      name: 'Lord Shiva GoldPlated Statue',
      image: 'https://www.sheroxtradellp.com/image/cc.jpg',
      description: 'Lord Shiva Statue',
      price: 800
    },
    {
      id: 4,
      name: 'Gold Plated Elephant Statue',
      image: 'https://divyacrafts.com/cdn/shop/products/9_600x.jpg?v=1653139472',
      description: 'elegence of elephant in gold plating.',
      price: 500
    },
    {
      id: 5,
      name: 'HandKerchief ',
      image: 'https://img.indiahandmade.com/catalog/product/cache/ffd74bda99b48b5fc1e6ab593972ce80/h/a/hanky1_1_46.png',
      description: 'HandKerchief made by tribals .',
      price: 100
    },
    {
      id: 6,
      name: 'SriKrishna idol with clay',
      image: 'https://m.media-amazon.com/images/I/81xvSoRcSHL._SX522_.jpg',
      description: 'Jai Sri Krishna',
      price: 200
    },
    {
      id: 7,
      name: 'wool Hangers',
      image: 'https://m.media-amazon.com/images/I/91AMch7HtuL.SX569.jpg',
      description: 'Showcase items made up of wool thread.',
      price: 199
    },
    {
      id: 8,
      name: 'Handcrafted Statue',
      image: '/images/statue.jpg',
      description: 'A beautiful handcrafted statue made by local artisans.',
      price: 150
    },
    {
      id: 9,
      name: 'Hanging bangles',
      image: 'https://m.media-amazon.com/images/I/41u3p5FptGL._SX300_SY300_QL70_FMwebp_.jpg',
      description: 'Showcase item in houses',
      price: 440
    },
    {
      id: 10,
      name: 'Pattern Sticker ',
      image: 'https://t3.ftcdn.net/jpg/05/71/69/84/360_F_571698455_gjm3uWHrxOcucrvmGMeYxm1aZeskvDy7.jpg',
      description: 'A beautiful sticker.',
      price: 15
    },
    {
      id: 11,
      name: 'wooden couple ',
      image: 'https://m.media-amazon.com/images/I/41WJRRIJ-UL.SX300SY300QL70FMwebp.jpg',
      description: 'A farmer and his wife',
      price: 129
    },
    {
      id: 12,
      name: 'Handcrafted Statue',
      image: '/images/statue.jpg',
      description: 'A beautiful handcrafted statue made by local artisans.',
      price: 125
    },
  ];

  return (
    <div className="items-container">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <img src={item.image} alt={item.name} className="item-image" />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p className="price">Price: ₹{item.price}</p>
          <div className="item-buttons">
            <button className="cart-button" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsPage;
