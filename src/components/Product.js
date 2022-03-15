import React, { useState } from 'react';

export default function Product(props) {
  const {
    id,
    image,
    title,
    description,
    price,
    addToCart,
    removeFromCart,
    isInCart,
  } = props;

  return (
    <article className="rounded-soft col-45 margin-phone-sm box-shadow padded flex flex-row between">
      <div className="col-third padded relative">
        {isInCart(id) && (
          <button
            onClick={() => removeFromCart(id)}
            className="absolute float-image-button rounded-soft box-shadow back-quaternary color-secondary font-bold hover-back-secondary hover-color-quaternary hover-border-md-quaternary"
          >
            x
          </button>
        )}
        <img src={image} className="img-responsive" />
      </div>
      <div className="col-2-third flex flex-column padded-hard between">
        <h4>{title}</h4>
        <br />
        <p>{description.substring(1, 50)}...</p>
        <br />
        <p
          className="padded text-center pointer rounded-soft color-secondary back-quaternary hover-color-quaternary hover-back-secondary hover-border-md-quaternary"
          onClick={() => addToCart(id, title, price)}
        >
          $ {price}
        </p>
        <br />
      </div>
    </article>
  );
}
