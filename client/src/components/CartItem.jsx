export default function CartItem({ details }) {
  return (
    <div className="cart-products">
      <div className="remove-button">
        <p>Remove</p>
      </div>
      <div className="cart-items">
      <img></img>
      <p>{details.name}</p>
      <p>{details.price}</p>
      <p>{details.quantity}</p>
      <p>{details.price * details.total}</p>
      </div>
    </div>
  );
}
