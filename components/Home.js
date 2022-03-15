import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="col-full padded-hard flex flex-row full-vh">
      <div className="col-half grid-center padded-hard">
        <header>
          <h1>Online shopping simplified</h1>
          <br />
          <p>
            Find the products you need from DiestroShop with our easy to use
            app, and get them delivered straight to your doorstep.
          </p>
          <br />
          <button
            onClick={() => navigate('/products')}
            className="padded-soft font-bold color-secondary main-font back-quaternary rounded-soft"
          >
            Start shopping
          </button>
        </header>
      </div>
      <div className="col-half grid-center padded-hard">
        <img
          src="https://raw.githubusercontent.com/DiestroCorleone/supermarket-app-assets/main/home-img.png"
          className="img-responsive contain"
        />
      </div>
    </main>
  );
}
