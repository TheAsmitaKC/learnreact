import React, { useEffect, useState } from 'react'
import Navbar from '../../Common/Navbar/navbar'
import { useNavigate } from 'react-router-dom'
import '../Home/home.css'
import Carousel from "../Carousel/carousel"

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log("Error in fetching data");
      });
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className='carousel'>
      <Carousel/>
      </div>
      <h1>List</h1>
      <div className="showlist">
        {products.map((product) => (
          <div
            key={product.id}
            className='product'
            onClick={() => handleClick(product.id)} 
            style={{ cursor: 'pointer' }}           
          >
            <img src={product.image} alt={product.title} />
            <p> <strong>{product.title}</strong></p>
            <p><strong>Category:</strong> {product.category}</p>
            <p>⭐{product.rating?.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
