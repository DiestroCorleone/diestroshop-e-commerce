import React, { useState, useEffect } from 'react';
import Product from './Product';

export default function Products(props) {
  const [products, setProducts] = useState([]);

  function getProducts() {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((e) => console.log('Error: ' + e));
  }

  useEffect(() => {
    getProducts();
  }, []);

  const renderProducts = products.map((product) => {
    return (
      <Product
        key={product.id}
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
        isInCart={props.isInCart}
      />
    );
  });

  return (
    <div className="padded-hard no-margin">
      <h2>Products</h2>
      <br />
      <p>Take a look at our products</p>
      <br />
      <div className="col-full grid-center">
        <div
          id="products-container"
          className="col-3-quarter no-margin around flex flex-row flex-wrap"
        >
          {renderProducts}
        </div>
      </div>
    </div>
  );
}
