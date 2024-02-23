import { useState } from "react";
import CartItem from "../components/CartItem";
import "../styles/cart.css"
export default function CartPage() {
  const mockCart = [
    {
        "id": 1,
      "name": "2KIN-product",
      "product-image": "https://via.placeholder.com/600x425",
      "price": 20,
      "quantity": 3,
    },
  ];
  const [cart, setCart] = useState(mockCart);
  console.log(cart.map((item) => item.price * item.quantity));

  // code tip from last comment of https://stackoverflow.com/questions/50729169/reduce-in-function-to-calculate-total-of-products

  const subtotal = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  console.log(subtotal);
  return (
    <div className="cart-content">
      <h3>Your cart</h3>
      <div className="cart-context">
        <p>product</p>
        <p>price per</p>
        <p>quantiy</p>
        <p>total</p>
      </div>
      {cart.map((item) => {
        return (
        <CartItem key={item.id} props={item} />
      )
      })}
      
      <h3>Subtotal: {subtotal} $ </h3>
      <button>check out</button>
    </div>
  );
}
