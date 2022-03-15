import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Products from './components/Products';
import Cart from './components/Cart';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [uniqueCart, setUniqueCart] = useState([]);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  useEffect(() => {
    function reportWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', reportWidth);

    return () => {
      window.removeEventListener('resize', reportWidth);
    };
  }, []);

  function addToCart(productId, productTitle, productPrice) {
    if (cart.length > 0 && cart.find((item) => item.id === productId)) {
      setCart((prevCart) => {
        const itemAmount = prevCart.find(
          (item) => item.id === productId
        ).amount;
        prevCart.find((item) => item.id === productId).amount = itemAmount + 1;
        return [...prevCart];
      });
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          id: productId,
          title: productTitle,
          price: productPrice,
          amount: 1,
          inCart: true,
        },
      ]);
    }
  }

  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id != productId));
  }

  function isInCart(productId) {
    try {
      return cart.find((item) => item.id === productId).inCart;
    } catch (e) {
      return false;
    }
  }

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : ''}>
        <Navbar
          toggleDarkMode={toggleDarkMode}
          windowWidth={windowWidth}
          itemsInCart={cart
            .map((item) => item.amount)
            .reduce((prev, curr) => prev + curr, 0)}
        />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={
              <Products
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                isInCart={isInCart}
              />
            }
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
