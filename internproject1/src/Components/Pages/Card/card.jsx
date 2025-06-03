import React from 'react';

const Card = ({ product, onClick }) => {
  return (
    <div className="product" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={product.image} alt={product.title} />
      <p><strong>{product.title}</strong></p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:$</strong> {product.price}</p>
      <p>⭐ {product.rating?.rate}</p>
    </div>
  );
};

export default Card;
