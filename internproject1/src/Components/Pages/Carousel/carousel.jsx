import React, { useEffect, useState } from 'react';
import '../Carousel/carousel.css';

const Carousel = () => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % products.length);
    }, 1000); 

    return () => clearInterval(interval); 
  }, [products]);

  if (products.length === 0) return <p>Loading...</p>;

  const product = products[index];

  return (
    <div className="carousel-container">
      <div className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
        
      </div>
    </div>
  );
};

export default Carousel;
