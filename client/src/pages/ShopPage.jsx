import { useContext, useState } from "react";
import "../styles/shop.css";
import product from "../utils/products.json";
import ShopImages from "../components/ShopImages";
import ShopProductItem from "../components/ShopProductItem";
import MainProductItem from "../components/MainProductItem";
import GlobalContext from "../GlobalContext";
import { useNavigate } from "react-router-dom";
export default function ShopPage() {
  const navigate = useNavigate();
  const { setCart } = useContext(GlobalContext);

  const clonedProduct = structuredClone(product);
  const [products, setProducts] = useState(clonedProduct);
  const findMainProductIndex = products.findIndex((item) =>
    item.name.includes("2KIN")
  );
  const mainProduct = products[findMainProductIndex];
  /*Start the inputs state with mainProduct */
  const [inputs, setInputs] = useState([mainProduct]);
  console.log(inputs);
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
