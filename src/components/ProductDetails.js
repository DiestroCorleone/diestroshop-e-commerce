import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ProductDetails() {
  const location = useLocation();

  return (
    <div className="col-full grid-center padded full-vh margin-phone-sm">
      <div className="col-3-quarter no-margin flex flex-column">
        <article className="col-full border-sm-primary rounded-soft padded-hard box-shadow flex flex-row around">
          <div className="col-half grid-center padded relative">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              className="img-responsive"
            />
          </div>
          <div className="col-half flex flex-column between">
            <h3>{location.state.title}</h3>
            <br />
            <p>{location.state.description}</p>
            <br />
            <p
              className="padded text-center pointer rounded-soft color-secondary back-quaternary hover-color-quaternary hover-back-secondary hover-border-md-quaternary"
              // onClick={() =>
              //   location.data.addToCart(
              //     location.state.id,
              //     location.state.title,
              //     location.state.price
              //   )
              // }
            >
              $ {location.state.price}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
