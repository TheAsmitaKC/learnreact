import React, { useEffect, useState } from 'react';
import Navbar from '../../Common/Navbar/navbar';
import { useNavigate } from 'react-router-dom';
import Card from "../Card/card";
import '../Pagination/pagination.css'
const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 

  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => console.log("Error in fetching data"));
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProducts = products.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Navbar />
      
      <div
        className="showlist"
        
      >
        {currentProducts.map((product) => (
          <div
            key={product.id}
          >
            <Card
              product={product}
              onClick={() => handleClick(product.id)}
            />
          </div>
        ))}
      </div>

     
      <div className='storebutton'>
      <button
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    className="btnprev"
    disabled={currentPage === 1}
  >
    Previous
  </button>
        {pageNumbers.map((number) => (
          <button 
            key={number}
            onClick={() => setCurrentPage(number)}
            className="numberbutton"
          >
            {number}
          </button>
          
        ))}
        <button
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
    className="btnnext"
    disabled={currentPage === totalPages}
  >
    Next
  </button>
      </div>
    
    </div>
  );
};

export default Home;
