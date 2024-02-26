import React from 'react'
import '../../styles/addProd.css';

export default function AddProduct() {
  return (
    <div className="container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter Product Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description</label>
          <textarea
            type="text"
            className="form-control-textarea"
            id="productDescription"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price</label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Enter Product Price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Product Image</label>
          <input type="file" className="form-control-file" id="productImage" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
   
        <div className="preview">
          <div className="product-card">
            <div className="product-image">
              <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div className="product-details">
              <h4>Product Name</h4>
              <p>Product Description</p>
              <p>Product Price</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div className="product-details">
              <h4>Product Name</h4>
              <p>Product Description</p>
              <p>Product Price</p>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div className="product-details">
              <h4>Product Name</h4>
              <p>Product Description</p>
              <p>Product Price</p>
            </div>
          </div>
      </div>
    </div>
  );
}
