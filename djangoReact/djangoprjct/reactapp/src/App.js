import React from 'react';

function ProductList() {
    const { products } = productsData;

    console.log('products:', products); // Check if products data is received

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
