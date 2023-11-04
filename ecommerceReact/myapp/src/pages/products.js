import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './product.css'

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setProducts(res.data.products);
        console.log("res", res);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className='gridContainer'>
      {products.map((value, index) => (
        <div key={index} className='products'>
          {value.title}
          <br />
          <img style={{ width: '100px', height: '100px' }} src={value.images[0]} alt='img' />
        </div>
      ))}
    </div>
  );
}

export default Product;
