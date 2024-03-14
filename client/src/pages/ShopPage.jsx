import { useContext, useEffect, useState } from "react";
import "../styles/shop.css";
import product from "../utils/products.json";
import ShopImages from "../components/ShopImages";
import ShopProductItem from "../components/ShopProductItem";
import MainProductItem from "../components/MainProductItem";
import GlobalContext from "../GlobalContext";
import { useNavigate } from "react-router-dom";
export default function ShopPage() {
  const navigate = useNavigate();
  const { setCart, cart } = useContext(GlobalContext);
  const clonedProduct = structuredClone(product);
  const [products, setProducts] = useState(clonedProduct);
  /**
   * Triggers child useEffect after parent useEffect
   * https://stackoverflow.com/questions/76083871/how-to-make-parent-useeffect-hook-execute-before-child-useeffect
   */
  const [triggerChildEffect, setTriggerChildEffect] = useState(false);
  const findMainProductIndex = products.findIndex((item) =>
    item.name.includes("2KIN")
  );

  const mainProduct = products[findMainProductIndex];
  /*Start the inputs state with mainProduct */
  const [inputs, setInputs] = useState([mainProduct]);

  /**
   * Set the inputs state to the cart if 
   * cart is not empty. 
   * This is for when someone goes back to shop and either
   * wants to add more of a product or extra
   * products without resetting the cart when trying to add to cart
   */
  useEffect(() => {
    if (cart.length >= 1) {
      setInputs(cart);
      setTriggerChildEffect(!triggerChildEffect)
    }
  }, []);

  /*updates the cart with the selected items*/

  function addItemsToCart() {
    setCart(inputs);
    navigate("/cart");
  }

  const totalPrice = inputs.reduce((sum, item) => {
    return (sum += item.price * item.quantity);
  }, 0);

  return (
    <div className={"shop-content"}>
      <ShopImages />
      <div className="product-content">
        <MainProductItem
          inputs={inputs}
          setInputs={setInputs}
          mainProduct={mainProduct}
          triggerChildEffect={triggerChildEffect}
        />
        {/* Maps out all products except for the "main product" */}
        {products
          .filter((item) => !item.name.includes("2KIN"))
          .map((item) => {
            return (
              <ShopProductItem
                inputs={inputs}
                setInputs={setInputs}
                productItem={item}
                key={item.id}
              />
            );
          })}
      </div>
      <div className="product-info">
        <h3>Total Price: {totalPrice} $</h3>

        <button type="submit" onClick={() => addItemsToCart()}>
          Add to cart
        </button>

        <h4>Product info</h4>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
