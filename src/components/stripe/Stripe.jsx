/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { loadStripe } from '@stripe/stripe-js'; 
import './Stripe.css';
import { getFilmsById } from '../../services/apiUtils';

//make sure to call 'loadStripe' outside of a component's render to avoid
//recreating the 'Stripe' object on every render. 

const stripePromise = loadStripe('pk_test_51J2mYKBEPUrE5EZhMNUxxskfORukvxnzSHoU5lMjbEop6GpVx0EjIYQeCYBd8ynK6QbzhKErM2ryNnw3q9wYXmBh002lfz8x2W');


const ProductDisplay = ({ handleClick }) => {
  const { id } = useParams(); 
  const film = getFilmsById(id);
  console.log(film, 'this is the film'); 


  return (
    <section>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of stubborn attachments"
        />
        <div className="description">
          <h3>Stubborn attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <button type="button" id="checkout-button" role="link" onClick={handleClick}>
      Checkout
      </button>
    </section>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Stripe() {
  const [message, setMessage] = useState(''); 

  useEffect(() => {
    //check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search); 

    if(query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.');
    }
  }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise; 

    const response = await fetch('/create-checkout-session', {
      method: 'POST',
    }); 

    const session = await response.json(); 

    const result = await stripe.redirectToCheckout({
      sessionId: session.id, 
    }); 

    if(result.error) {
      return result.error.message; 
    }
  }; 
  return message ? (
    <Message message={message} /> 
  ) : (
    <ProductDisplay handleClick={handleClick} /> 
  ); 

}





