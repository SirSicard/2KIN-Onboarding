import React, { useState } from 'react';
import '../../styles/billingPage.css';

function BillingFormMethod({ showForm1, setShowForm1 }) {
  const [paymentOption, setPaymentOption] = useState('credit'); 

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
  };

  return (
    <form className="billing-form">
      <label htmlFor="cardNumber">Pay with</label>
      <div className="payment-options">
        <button
          type="button"
          className={`payment-option ${paymentOption === 'credit' ? 'active' : ''}`}
          onClick={() => handlePaymentOptionChange('credit')}
        >
          Credit or debit card
        </button>
        <button
          type="button"
          className={`payment-option ${paymentOption === 'paypal' ? 'active' : ''}`}
          onClick={() => handlePaymentOptionChange('paypal')}
        >
          Paypal account
        </button>
      </div>
      {paymentOption === 'credit' ? (
        <>
          <div className="billing-form-group-m">
            <label htmlFor="cardNumber">Credit Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="Card Number"
              required
            />
          </div>
          <div className="expiration-options">
            <label htmlFor="expirationDate">Expiration Date (YYYY)</label>
            <div className="expiration-options-g">
              <select id="expirationDate" name="expirationDate" required>
                <option value="Select One">Select One</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
              <select id="expirationDate" name="expirationDate" required>
                <option value="Select One">Select One</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
          </div>
          <div className="billing-form-group-m">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="CVV" required />
          </div>
          <div className="billing-form-group-2">
            <button
              type="button"
              className="btn_1"
              onClick={() => setShowForm1(false)} // Set showForm to false to hide the form
            >
              Cancel
            </button>
            <button type="submit" className="btn_1">
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="billing-form-group">
            <label htmlFor="paypalEmail">Sign in to</label>
            <button type="button" className="btn-paypal">
              Paypal
            </button>
          </div>
          <button
            type="button"
            className="btn-cancel"
            onClick={() => setShowForm1(false)} // Set showForm to false to hide the form
          >
            Cancel
          </button>
        </>
      )}
    </form>
  );
}

export default BillingFormMethod;
