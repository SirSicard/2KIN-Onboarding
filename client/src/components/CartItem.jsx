export default function CartItem({ details }) {


  function onDelete() {
    console.log("deleted")
  }
  const total = details.price * details.quantity;
  console.log(total)
  return (
    <div className="cart-products">
      <div className="remove-button" onClick={onDelete}>
        <p>Remove</p>
      </div>
      <div className="cart-items">
        <div>
          <img src={details["product-image"]}></img>
          <p>{details.name}</p>
        </div>
        <p>{details.price}</p>
        <p>{details.quantity}</p>
        <p>{total}</p>
      </div>
    </div>
  );
}
