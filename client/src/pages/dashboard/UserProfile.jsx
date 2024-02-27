import React from 'react'
import '../../styles/userProfile.css';
export default function UserProfile() {
  const [imagePreview, setImagePreview] = React.useState('');
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
        <h5 className="card-title">User Profile</h5>
        <div className="row">
          <div className="col-lg-3">
            <div className="card-body">
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
            </div>
          </div>
          <form>
            <input type="text" className="form-control" placeholder="Name" />
            <input type="text" className="form-control" placeholder="Email" />
            <input type="text" className="form-control" placeholder="Phone" />

            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
