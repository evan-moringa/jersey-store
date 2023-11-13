import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ShoppingKart = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div>
      
      <ul>
        <li>
          Product 1
          <button onClick={() => handleAddToCart('Product 1')}>Add to Cart</button>
        </li>
        <li>
          Product 2
          <button onClick={() => handleAddToCart('Product 2')}>Add to Cart</button>
        </li>
        
      </ul>

      
      <FaShoppingCart size={24} color="black" onClick={handleCartClick} style={{ cursor: 'pointer' }} />

      
      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            <h2>Your Cart</h2>
            <ul>
              {selectedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button onClick={handleCloseCart}>Close Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingKart;