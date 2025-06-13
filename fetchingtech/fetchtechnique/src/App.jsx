import React from 'react'
import axios from 'axios'
const App = () => {
  axios.get('https://dummyjson.com/products')
  .then(response=>{console.log(response.data)})
  .catch(error=>{console.log(error)})

  // axios.post('https://dummyjson.com/products/add',{
  //   title: "newtitle",
  //   price:1000

  // })
  // .then(res=>console.log(res))
  // axios.put('https://dummyjson.com/products/1', {
  //   title: 'Updated Product Titles'
  // })
  // .then(res => console.log('Updated:', res.data))
  // .catch(err => console.error(err));
  

  axios.delete('https://dummyjson.com/products/1')
  .then(res => console.log('Deleted:', res.data))
  .catch(err => console.error(err));

  return (
    <div>
     App
    </div>
  )
}

export default App