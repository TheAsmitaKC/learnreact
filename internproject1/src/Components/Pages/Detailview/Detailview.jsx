import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Common/Navbar/navbar";
import "../Detailview/Detailview.css";

const Detailview = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading product detail", err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading product...</div>;
  if (error || !product) return <div>Product not found.</div>;

  return (
    <div>
      <Navbar />
      <div className="product-detail">
        <img src={product.image} alt={product.title} />
        <div className="detail-info">
          <h2>{product.title}</h2>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)</p>
        </div>
      </div>
    </div>
  );
};

export default Detailview;
