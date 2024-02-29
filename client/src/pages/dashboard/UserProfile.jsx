import React, { useState } from 'react';
import '../../styles/userProfile.css';
export default function UserProfile() {
  const [imagePreview, setImagePreview] = useState('');

  // Function to handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <div className="container-lg">
        <div className="row">
          {/* Add profile image 👇 */}
          {/* <div className="col-lg-3"> */}
          {/* <div className="card-body">
              <div>
                <input
                  type="file"
                  accept="image/*"
                  id="file-upload"
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />

                <label htmlFor="file-upload">
                  <div className="image-cover">
                    {imagePreview ? (
                      <img
                        className="img-fluid"
                        src={imagePreview}
                        alt="Selected"
                      />
                    ) : (
                      <span className="material-icons">Upload</span>
                    )}
                  </div>
                </label> 
              </div>
            </div>*/}
          {/* </div> */}
          <div className="billing-form-group-info">
            <form>
              <h2>User Profile</h2>
              <div className="billing-form-group-1">
                <div className="billing-form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="billing-form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="LastName" name="lastName" required />
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
            </form>
          </div>
          <div className="billing-form-group-pass">
            <form>
              <h2>Change Password</h2>
              <div className="billing-form-group">
                <label htmlFor="oldPassword">Old Password</label>
                <input
                  type="password"
                  id="oldPassword"
                  name="password"
                  required
                />
              </div>
              <div className="billing-form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="new-password"
                  name="newPassword"
                  required
                />
              </div>
              <div className="billing-form-group">
                <label htmlFor="newPassword">Repeat Password</label>
                <input
                  type="password"
                  id="repeat-password"
                  name="newPassword"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="update-btn">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
