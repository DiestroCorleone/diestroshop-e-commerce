import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from './CartContext';

export default function ProductDetails() {
  const location = useLocation();
  const { isInCart, removeFromCart, addToCart } = useContext(CartContext);

  return (
    <div className="col-full grid-center padded full-vh margin-phone-sm">
      <div className="col-3-quarter no-margin flex flex-column">
        <article className="col-full border-sm-primary rounded-soft padded-hard box-shadow flex flex-row around">
          <div className="col-half grid-center padded relative">
            {isInCart(location.state.id)[0] && (
              <button className="absolute float-image-button-left rounded-soft box-shadow back-quaternary color-secondary hover-back-secondary hover-color-quaternary hover-border-md-quaternary">
                {isInCart(location.state.id)[1]}
              </button>
            )}
            <img src={location.state.image} className="img-80 contain" />
          </div>
          <div className="col-half flex flex-column between relative">
            {isInCart(location.state.id)[0] && (
              <button
                onClick={() => removeFromCart(location.state.id)}
                className="absolute float-image-button-right rounded-soft box-shadow close-button color-secondary font-bold hover-back-secondary hover-color-quaternary"
              >
                x
              </button>
            )}
            <h3>{location.state.title}</h3>
            <br />
            <p>{location.state.description}</p>
            <br />
            <p
              className="padded text-center pointer rounded-soft color-secondary back-quaternary hover-color-quaternary hover-back-secondary hover-border-md-quaternary"
              onClick={() =>
                addToCart(
                  location.state.id,
                  location.state.title,
                  location.state.price
                )
              }
            >
              $ {location.state.price}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
