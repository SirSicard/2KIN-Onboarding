import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/loginPopup.css";
import PropTypes from "prop-types";

function LoginPopup({ onClose }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Placeholder for submission handler
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Logging in with:", formData);

    onClose();
  };

  return (
    <section className="login-popup">
      <div className="overlay" onClick={onClose}></div>
      <div className="popup">
        <div className="close" onClick={onClose}></div>
        <img src="https://placehold.co/150" alt="logo" />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <Link>Forget password?</Link>
          </div>
          <div className="form-group submit-btn">
            <input type="submit" value="LOGIN" />
          </div>
          <div className="form-group register-btn">
            <Link to="/register" onClick={onClose}>
              SIGN UP
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

LoginPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LoginPopup;
