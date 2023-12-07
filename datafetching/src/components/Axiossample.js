import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      {products.map((value, index) => (
        <div key={index}>
          {value.title}
          <br />
          <img style={{ width: '100px', height: '100px' }} src={value.images[0]} alt='img' />
        </div>
      ))}
    </div>
  );
}
 
export default Product;
