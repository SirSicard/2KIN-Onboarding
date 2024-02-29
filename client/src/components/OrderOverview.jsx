import PropTypes from "prop-types";
import "../styles/orderOverview.css";

function OrderOverview({ cartItems }) {
  return (
    <section className="order-overview">
      <h2>Order Overview</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="product-item">
          <div className="product">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
            </div>
          </div>
          <div className="total-price">
            <div className="product-quantity">
              <button>-</button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => console.log(parseInt(e.target.value))}
              />
              <button>+</button>
            </div>
            <p>{item.price * item.quantity}</p>
          </div>
        </div>
      ))}
      <div className="tax">
        <p>Tax</p>
        <p>1500</p>
      </div>
      <div className="total-amount">
        <p>Total Amount</p>
        <p>34500</p>
      </div>
    </section>
  );
}

OrderOverview.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default OrderOverview;
