import React, { useEffect, useState } from 'react'

const carousel = () => {
  
  const [products, setproducts]= useState([])
  const[ index, setindex]= useState(0)
  
  useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json)
  .then(data =>setproducts(data))
  .catch(error => console.error("Error fetching products", error));
},[])
const handleprevious=()=>{
setindex((prevIndex )=> prevIndex +1 );
}
const handlenext=()=>{
setindex((prevIndex)=>prevIndex-1)
}

  return (
    <div>
      <button onClick={handleprevious}>Previous</button>
      <button onClick={handlenext}>Next</button>
    </div>
  )
}

export default carousel