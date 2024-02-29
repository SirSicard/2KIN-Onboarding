import PropTypes from "prop-types";
import "../styles/userDetails.css";

function UserDetails({ formData, handleInputChange }) {
  // Array of country names
  const countries = ["Denmark", "Norway", "Sweden", "Finland"];

  const handleInput = (name, value) => {
    handleInputChange({ target: { name, value } });
  };

  return (
    <section className="user-details">
      <h2>User Details</h2>
      <div className="form-group">
        <select
          id="country"
          defaultValue="Country/Region"
          onChange={({ target }) => handleInput(target.name, target.value)}
          required
        >
          <option disabled hidden>
            Country/Region
          </option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={({ target }) => handleInput(target.name, target.value)}
            placeholder="First name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={({ target }) => handleInput(target.name, target.value)}
            placeholder="Last name"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={({ target }) => handleInput(target.name, target.value)}
            placeholder="Address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={({ target }) => handleInput(target.name, target.value)}
            placeholder="City"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={({ target }) => handleInput(target.name, target.value)}
            placeholder="Postal Code"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={({ target }) => handleInput(target.name, target.value)}
            placeholder="Phone"
            required
          />
        </div>
      </div>
    </section>
  );
}

UserDetails.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default UserDetails;
