import React from 'react';
import { Link } from 'react-router-dom';

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
    <article className="rounded-soft col-45 margin-phone-sm box-shadow padded flex flex-row between relative">
      <div className="col-third padded relative">
        {isInCart(id)[0] && (
          <button className="absolute float-image-button-left rounded-soft box-shadow back-quaternary color-secondary hover-back-secondary hover-color-quaternary hover-border-md-quaternary">
            {isInCart(id)[1]}
          </button>
        )}
        <img src={image} className="img-responsive" />
      </div>
      <div className="col-2-third flex flex-column padded-hard between">
        <Link
          to={`/products/${id}`}
          state={{
            id: id,
            image: image,
            title: title,
            description: description,
            price: price,
          }}
        >
          <h4>{title}</h4>
          <br />
          <p>{description.substring(1, 50)}...</p>
          <br />
        </Link>
        <p
          className="padded text-center pointer rounded-soft color-secondary back-quaternary hover-color-quaternary hover-back-secondary hover-border-md-quaternary"
          onClick={() => addToCart(id, title, price)}
        >
          $ {price}
        </p>
        <br />
        {isInCart(id)[0] && (
          <button
            onClick={() => removeFromCart(id)}
            className="absolute float-image-button-right rounded-soft box-shadow close-button color-secondary font-bold hover-back-secondary hover-color-quaternary"
          >
            x
          </button>
        )}
      </div>
    </article>
  );
}
