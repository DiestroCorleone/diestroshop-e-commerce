import React, { useState, useEffect } from 'react';

export default function Cart(props) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let fullPrice = 0;
    props.cart.map((item) => {
      fullPrice += item.price * item.amount;
      setTotalPrice(fullPrice.toFixed(2));
    });
  }, [props.cart]);

  const renderCart = props.cart.map((item) => {
    console.log(totalPrice);
    return (
      <tr>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.amount}</td>
        <td>{item.price * item.amount}</td>
      </tr>
    );
  });

  return (
    <div className="col-full flex flex-column between padded-hard">
      <h2>Your cart</h2>
      <br />
      {props.cart.length > 0 ? (
        <>
          <table className="text-center">
            <thead>
              <tr className="back-quaternary padded-sm color-secondary">
                <th>Product</th>
                <th>Unit price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {renderCart}
              <tr className="padded-sm color-secondary">
                <td colSpan="2"></td>
                <td className="back-quaternary">TOTAL: </td>
                <td className="back-quaternary">$ {totalPrice}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>
            Enter your email and then click on pay and your products will be
            delivered to you on the same day!
          </p>
          <br />
          <input
            type="email"
            name="email"
            placeholder="email@mail.com"
            className="padded border-sm-quaternary col-third rounded-soft"
          />
          <br />
          <button className="back-quaternary col-third color-secondary rounded-soft font-bold">
            Pay
          </button>
        </>
      ) : (
        <p className="half-vh">
          You have not added any product to your cart yet.
        </p>
      )}
    </div>
  );
}
