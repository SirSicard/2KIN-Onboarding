import { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import "../styles/cart.css";

import { useNavigate } from "react-router-dom";
import GlobalContext from "../GlobalContext";

export default function CartPage() {
  const { cart, setCart } = useContext(GlobalContext);

  const navigate = useNavigate();

  // code tip from last comment of https://stackoverflow.com/questions/50729169/reduce-in-function-to-calculate-total-of-products
  const subtotal = cart?.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  console.log(subtotal);
  return (
    <div className="cart-content">
      <h2>Your cart</h2>
      {cart.length !== 0 ? (
        <>
          <div className="cart-context">
            <p>product</p>
            <p>price per</p>
            <p>quantity</p>
            <p>total</p>
          </div>
          {cart?.map((item) => {
            return (
              <CartItem
                cart={cart}
                setCart={setCart}
                key={item.id}
                cartItem={item}
              />
            );
          })}
          <h3>Subtotal: {subtotal} $ </h3>
          <button onClick={() => navigate("/checkout")}>check out</button>{" "}
        </>
      ) : (
        <>
          <h3>Your cart is empty</h3>
          <button onClick={() => navigate("/shop")}>Continue shopping</button>
        </>
      )}
    </div>
  );
}
