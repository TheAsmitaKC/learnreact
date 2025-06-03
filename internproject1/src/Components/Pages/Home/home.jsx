import React, { useEffect, useState } from 'react'
import Navbar from '../../Common/Navbar/navbar'
import { useNavigate } from 'react-router-dom'
import '../Home/home.css'
import Carousel from "../Carousel/carousel"
import Card from "../Card/card"

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
          <Card
            key={product.id}
            product={product}
            onClick={() => handleClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
