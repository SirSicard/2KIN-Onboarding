import React from 'react'
import '../../styles/shopHistory.css';

export default function ShopHistory() {
  return (
    
    <div className="item-content">
        <h3>Shop History</h3>
        <div className="shop-history">
          <div className="shop-history-item">
            <div className="group-item group-1">
                <h5>Order nr:</h5>
                <span>
                  <strong>0000000000</strong>
                </span>
           
            </div>
            <div className="box-1">
              <div className="product-card-h">
                <div className="product-image">
                  <img src="https://via.placeholder.com/150" alt="product" />
                </div>
                <div className="product-details">
                  <h4>Product Name</h4>
                  <p>Product Description</p>
                  <p>Price: $0.00</p>
                </div>
              </div>

              <div className="product-card-h">
                <div className="product-image">
                  <img src="https://via.placeholder.com/150" alt="product" />
                </div>
                <div className="product-details">
                  <h4>Product Name</h4>
                  <p>Product Description</p>
                  <p>Price: $0.00</p>
                </div>
              </div>
            </div>
            <div className="group-item group-2">
              <p>Date:</p>
              <span>00/00/0000</span>
            </div>
            <div className="group-item group-3">
              <p>Payment method:</p>
              <span>Paypal</span>
            </div>
            <div className="group-item group-4">
              <p>delivery:</p>
              <span>Delivered</span>
            </div>
            <div className="group-item group-5">
              <p>Delivery address:</p>
              <span>Address</span>
            </div>
            <div className="group-item group-6">
              <p>Total:</p>
              <span>
                <strong>$0.00</strong>
              </span>
            </div>
          </div>
        </div>
        {/* second test  */}

        <div className="shop-history">
          <div className="shop-history-item">
            <div className="group-item">
              <h5>Order nr:</h5>
              <span>
                <strong>0000000000</strong>
              </span>
            </div>
            <div className="box-1">
              <div className="product-card-h">
                <div className="product-image">
                  <img src="https://via.placeholder.com/150" alt="product" />
                </div>
                <div className="product-details">
                  <h4>Product Name</h4>
                  <p>Product Description</p>
                  <p>Price: $0.00</p>
                </div>
              </div>

              <div className="product-card-h">
                <div className="product-image">
                  <img src="https://via.placeholder.com/150" alt="product" />
                </div>
                <div className="product-details">
                  <h4>Product Name</h4>
                  <p>Product Description</p>
                  <p>Price: $0.00</p>
                </div>
              </div>
            </div>
            <div className="group-item group-2">
              <p>Date:</p>
              <span>00/00/0000</span>
            </div>
            <div className="group-item group-3">
              <p>Payment method:</p>
              <span>Paypal</span>
            </div>
            <div className="group-item group-4">
              <p>delivery:</p>
              <span>Delivered</span>
            </div>
            <div className="group-item group-5">
              <p>Delivery address:</p>
              <span>Address</span>
            </div>
            <div className="group-item group-6">
              <p>Total:</p>
              <span>
                <strong>$0.00</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

  );
}
