import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function CartItem({ cart, cartItem, setCart }) {
  const [inputs, setInputs] = useState({ quantity: cartItem.quantity });

  function onDelete() {
    const arr = [...cart];
    const findIndex = cart.findIndex((item) => item.id == cartItem.id);
    setCart([...arr.slice(0, findIndex), ...arr.slice(findIndex + 1)]);

    console.log("deleted");
  }

  


  useEffect(() => {
    console.log(inputs)
    if (cartItem.quantity <= 0) {
      
      const findIndex = cart.findIndex((item) => item.id == cartItem.id);
      const arr = [...cart]; 
      setCart([...arr.slice(0, findIndex), ...arr.slice(findIndex + 1)]);
    }
  }, [cartItem]);

  /*Code greatly inspired from comment of this post
    https://stackoverflow.com/questions/71333439/setting-the-values-of-an-object-in-an-array-in-react
  */
  function incrementQuantity(event) {
    const { value } = event.target;
    const arr = [...cart];
    const findIndex = cart.findIndex((item) => item.id == value);
    arr[findIndex] = { ...arr[findIndex], ["quantity"]: inputs.quantity + 1 };
    setInputs((values) => ({ ...values, ["quantity"]: inputs.quantity + 1 }));
    setCart(arr);
  }

  function decrementQuantity(event) {
    const { value } = event.target;
    const arr = [...cart];
    const findIndex = cart.findIndex((item) => item.id == value);
    arr[findIndex] = { ...arr[findIndex], ["quantity"]: inputs.quantity - 1 };
    setInputs((values) => ({ ...values, ["quantity"]: inputs.quantity - 1 }));
      setCart(arr);
 
  }
  function handleSubmit(event) {
    event.preventDefault();
    const arr = [...cart];
    const findIndex = cart.findIndex((item) => item.id == cartItem.id);
    arr[findIndex] = { ...arr[findIndex], ["quantity"]: inputs.quantity };
    setCart(arr);
  }

  function handleQuantityInput(event) {
    const { value, name } = event.target;
    setInputs((values) => ({ ...values, [name]: parseInt(value) }));
  }
  console.log(cartItem.quantity)
  const total = cartItem.price * cartItem.quantity;
  return (
    <div className="cart-products">
      <div className="remove-button" onClick={onDelete}>
        <p>Remove</p>
      </div>
      <div className="cart-items">
        <div>
          <img src={cartItem["product-image"]}></img>
          <p>{cartItem.name}</p>
        </div>
        <p>{cartItem.price}</p>
        <div className="quantity-content">
          <button onClick={decrementQuantity} value={cartItem.id}>
            -
          </button>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              min={0}
              max={99}
              type="number"
              name="quantity"
              onChange={(e) => handleQuantityInput(e)}
              key={cartItem.id}
              value={inputs.quantity}
            />
            <input type="submit" hidden />
          </form>
          <button onClick={incrementQuantity} value={cartItem.id}>
            +
          </button>
        </div>
        <p>{total}</p>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    "product-image": PropTypes.string.isRequired,
  }).isRequired,
  setCart: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
};
