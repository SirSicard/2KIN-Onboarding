import PropTypes from "prop-types";
export default function CartItem({ cartItem, setCart }) {



  function onDelete() {
    console.log("deleted")
  }

  function incrementQuantity() {
    setCart()
  }

  function decrementQuantity(){

  }

  function handleQuantityInput() {

  }

  const total = props.price * props.quantity;



  console.log(total)
  return (
    <div className="cart-products">
      <div className="remove-button" onClick={onDelete}>
        <p>Remove</p>
      </div>
      <div className="cart-items">
        <div>
          <img src={props["product-image"]}></img>
          <p>{props.name}</p>
        </div>
        <p>{props.price}</p>
        <div className="quantity-content">
        <button>-</button>
        <input type="number" defaultValue={props.quantity} />
        <button>+</button>
        </div>
        <p>{total}</p>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  cartItem: PropTypes.shape( {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    "product-image": PropTypes.string.isRequired
  }).isRequired,
  setCart: PropTypes.func.isRequired
 
};
