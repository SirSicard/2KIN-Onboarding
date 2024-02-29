import PropTypes from "prop-types";
import "../styles/paymentForm.css";

function PaymentForm({ formData, handleInputChange }) {
  // Generate months and years arrays
  const months = generateMonths();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  const paymentMethods = ["credit-card", "paypal"];

  const handleInput = (name, value) => {
    handleInputChange({ target: { name, value } });
  };

  return (
    <section className="payment-details">
      <h2>Payment Details</h2>
      <div className="payment-method">
        {paymentMethods.map((method) => (
          <button
            key={method}
            className={formData.paymentMethod === method ? "active" : ""}
            onClick={() => handleInput("paymentMethod", method)}
          >
            Pay With {method === "credit-card" ? "Card" : "PayPal"}
          </button>
        ))}
      </div>

      {formData.paymentMethod === "credit-card" && (
        <div className="card-details">
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={({ target }) => handleInput(target.name, target.value)}
              placeholder="Enter card number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardHolder">Card Holder</label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={({ target }) => handleInput(target.name, target.value)}
              placeholder="Enter card holder's name"
              required
            />
          </div>
          <div className="form-group form-row">
            <div className="expiry-date">
              <label>Expiry Date</label>
              <div className="wrapper">
                <select
                  id="expiryMonth"
                  defaultValue="Month"
                  onChange={({ target }) =>
                    handleInput(target.name, target.value)
                  }
                  required
                >
                  <option disabled hidden>
                    Month
                  </option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  id="expiryYear"
                  defaultValue="Year"
                  onChange={({ target }) =>
                    handleInput(target.name, target.value)
                  }
                  required
                >
                  <option disabled hidden>
                    Year
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={({ target }) =>
                  handleInput(target.name, target.value)
                }
                placeholder="CVV"
                required
              />
            </div>
          </div>
        </div>
      )}
      {formData.paymentMethod === "paypal" && (
        <div className="form-group">
          <label htmlFor="paypalEmail">PayPal Email</label>
          <input
            type="email"
            id="paypalEmail"
            name="paypalEmail"
            value={formData.paypalEmail}
            onChange={({ target }) => handleInput(target.name, target.value)}
            placeholder="Enter PayPal email"
            required
          />
        </div>
      )}
    </section>
  );
}

// Function to generate an array of months (01-12)
function generateMonths() {
  return Array.from({ length: 12 }, (_, i) => (i < 9 ? "0" : "") + (i + 1));
}

PaymentForm.propTypes = {
  formData: PropTypes.shape({
    paymentMethod: PropTypes.oneOf(["credit-card", "paypal"]),
    cardNumber: PropTypes.string,
    cardHolder: PropTypes.string,
    expiryMonth: PropTypes.string,
    expiryYear: PropTypes.string,
    cvv: PropTypes.string,
    paypalEmail: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default PaymentForm;
