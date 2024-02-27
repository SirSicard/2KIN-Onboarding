import React, { useState } from 'react';
import '../../styles/billingPage.css';
import BillingFormInfo from './BillingFormInfo'; 
import BillingFormMethod from './BillingFormMethod';

export default function BillingPage() {
  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);

  const handleEditFrom = () => {
    setShowForm(!showForm);
  };

  const handleEditFrom2 = () => {
    setShowForm2(!showForm2);
  }

  return (
    <div className="billing-container">
      <div className="billing-header">
        <div className="payment">
         
            <h3>Payment information</h3>
          
          {showForm ? (
            <BillingFormInfo showForm={showForm} setShowForm={setShowForm} />
          ) : (
            <div className='group-1'>
              <div className="btn-1">
                <button className="edit-btn" onClick={handleEditFrom}>
                  Edit
                </button>
                <button className="edit-btn">Remove</button>
              </div>

              <div className="address-info">
                <h4>John Doe</h4>
                <p>1234 Main St</p>
                <p>Springfield, IL 62701</p>
                <p>United States</p>
              </div>
            </div>
          )}
        </div>
        <div className="payment">
          <h3>Payment method</h3>
            {showForm2 ? (
            <BillingFormMethod
              showForm1={showForm2} setShowForm1={setShowForm2} />
          ) : (
             <div className='group-1'>
            <div className="btn-1">
                  <button className="edit-btn"
                  
                  onClick={handleEditFrom2}
                  >Edit</button>
              <button className="edit-btn">Remove</button>
            </div>
          <div className="payment-info">
            <h4>Mastercard</h4>
            <p>**** **** **** 1234</p>
            <p>Expires 12/24</p>
          </div>
        </div>
          )}
        </div>
      </div>
    </div>
  );
}
