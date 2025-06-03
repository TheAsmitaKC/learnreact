import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Filter/filter.css";
import Navbar from "../../Common/Navbar/navbar";
import Card from "../Card/card";

const Filter = () => {
  const [products, setProducts] = useState<
    { id: number; [key: string]: any }[]
  >([]);
  const [filterBy, setFilterBy] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<typeof products>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(() => {
        console.log("Error in fetching data");
      });
  }, []);

  useEffect(() => {
    let temp = [...products];

    if (filterBy === "category" && selectedOption) {
      temp = temp.filter(
        (p) => p.category.toLowerCase() === selectedOption.toLowerCase()
      );
    }

    if (filterBy === "price") {
      if (selectedOption === "low") {
        temp.sort((a, b) => a.price - b.price);
      } else if (selectedOption === "high") {
        temp.sort((a, b) => b.price - a.price);
      }
    }
    if (filterBy === "rating") {
      if (selectedOption === "low") {
        temp.sort((a, b) => a.rating.rate - b.rating.rate);
      } else if (selectedOption === "high") {
        temp.sort((a, b) => b.rating.rate - a.rating.rate);
      }
    }

    setFilteredProducts(temp);
  }, [filterBy, selectedOption, products]);

  const handleClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="filter-main">
        <div className="filter-left">Filter</div>
        <div className="filter-right">
          <select
            className="filterselection"
            value={filterBy}
            onChange={(e) => {
              setFilterBy(e.target.value);
              setSelectedOption("");
            }}
          >
            <option value="">Filter By:</option>
            <option value="price">Price</option>
            <option value="category">Category</option>
            <option value="rating">Rating</option>
          </select>

          {filterBy === "price" && (
            <select
              className="filterselection"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Select</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          )}

          {filterBy === "category" && (
            <select
              className="filterselection"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
          )}
          {filterBy === "rating" && (
            <select
              className="filterselection"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Select</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          )}
        </div>
      </div>

      <div className="showlist">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            product={product}
            onClick={() => handleClick(product.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Filter;
