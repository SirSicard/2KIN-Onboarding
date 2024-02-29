import { useState } from "react";
import "../styles/shop.css";
import product from "../utils/products.json";
import ShopImages from "../components/ShopImages";
import ShopProductItem from "../components/ShopProductItem";
export default function ShopPage() {
  const clonedProduct = structuredClone(product);
  const [products, setProducts] = useState(clonedProduct);
  const [quantity, setQuantity] = useState();
  const mainProduct = products[0];

  function handleSubmit(event) {
    event.preventDefault();
    console.log(quantity);
  }

  function handleInputChange(event) {
    setQuantity(event.target.value);
  }
  return (
    <div className={"shop-content"}>
      <ShopImages />
      <div className="product-content">
        <h3>{mainProduct.name}</h3>
        <p>{mainProduct.price} $</p>
        <div className="main-product">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>
              <span>Quantity: &nbsp; &nbsp;</span>
              <input
                type="number"
                onChange={handleInputChange}
                min={1}
                max={99}
                name="quantity"
              />{" "}
              <input type="submit" hidden />
              &nbsp;&nbsp;&nbsp;
              <span>{mainProduct.price} $ st</span>
            </label>
          </form>
        </div>
        {/* Maps out all products except for the "main product" */}
        {products
          .filter((item) => !item.name.includes("2KIN"))
          .map((item) => {
            return <ShopProductItem productItem={item} key={item.id} />;
          })}
      </div>
      <div className="product-info">
        <h3>Total Price: 200 $</h3>

        <button type="submit">Add to cart</button>

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
