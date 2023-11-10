import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <h2>Our Official Sponsors</h2>
      <a href="https://www.nike.com" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_nike_principal.jpg" alt="Nike Logo" className="logo" />
      </a>
      <a href="https://www.adidas.com" target="_blank" rel="noopener noreferrer">
        <img src="https://logowik.com/content/uploads/images/adidas-old8715.jpg" alt="Adidas Logo" className="logo" />
      </a>
      <a href="https://www.puma.com" target="_blank" rel="noopener noreferrer">
        <img src="https://logowik.com/content/uploads/images/puma.jpg" alt="Puma Logo" className="logo" />
      </a>
    </div>
  );
}


