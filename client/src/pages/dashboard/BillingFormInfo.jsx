import React from 'react';
import '../../styles/billingPage.css';

function BillingFormInfo({ showForm, setShowForm }) {

  return (
    <form className="billing-form">
      <div className="billing-form-group-1">
        <div className="billing-form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="name" name="firstName" required />
        </div>
        <div className="billing-form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="name" name="lastName" required />
        </div>
      </div>
      <div className="billing-form-group">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" required />
      </div>
      <div className="billing-form-group">
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" required />
      </div>
      <div className="billing-form-group">
        <label htmlFor="state">State</label>
        <input type="text" id="state" name="state" required />
      </div>
      <div className="billing-form-group">
        <label htmlFor="zip">Zip</label>
        <input type="text" id="zip" name="zip" required />
      </div>
      <div className="billing-form-group">
        <label htmlFor="country">Country</label>
        <input type="text" id="country" name="country" required />
      </div>

      <div className="billing-form-group-2">
        <button
          type="button"
          className="btn_1"
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>
        <button type="submit" className="btn_1">
          Save
        </button>
      </div>
    </form>
  );
}

export default BillingFormInfo;
