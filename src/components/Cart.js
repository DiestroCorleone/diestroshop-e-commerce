import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function Cart(props) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
  });

  useEffect(() => {
    let fullPrice = 0;
    props.cart.map((item) => {
      fullPrice += item.price * item.amount;
      setTotalPrice(fullPrice.toFixed(2));
    });
  }, [props.cart]);

  const renderCart = props.cart.map((item) => {
    return (
      <tr>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.amount}</td>
        <td>{item.price * item.amount}</td>
      </tr>
    );
  });

  function handleFormData(event) {
    const { name } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: event.target.value,
    }));
  }

  function handleToken(token, addresses) {
    console.log({ token, addresses });
  }

  console.log(formData.email);

  return (
    <div className="col-full flex flex-column between padded-hard full-vh">
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
            onChange={handleFormData}
            value={formData.email}
            required
          />
          <br />
          <StripeCheckout
            disabled={!formData.email}
            className="col-third"
            stripeKey="pk_test_51KeJDAKlY1GE3s6GeJ4MtQuB7HPMSfbSsbN6TSBEFHZgPa1c5RAhnujGenZqCkiFwUfmpAMgHUQ6id0KbFJR7cK400dWNFuGm4"
            token={handleToken}
            amount={totalPrice * 100}
            email={formData.email}
          />
        </>
      ) : (
        <p className="full-vh">
          You have not added any product to your cart yet.
        </p>
      )}
    </div>
  );
}
