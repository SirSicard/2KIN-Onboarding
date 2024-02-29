import { useState } from "react";
import "../styles/shop.css";
import product from "../utils/products.json";
import ShopImages from "../components/ShopImages";
import ShopProductItem from "../components/ShopProductItem";
import MainProductItem from "../components/MainProductItem";
export default function ShopPage() {
  
  const clonedProduct = structuredClone(product);
  const [products, setProducts] = useState(clonedProduct);
  const mainProduct = products[0];
  const [inputs, setInputs] = useState([mainProduct]);
  console.log(inputs)
  return (
    <div className={"shop-content"}>
      <ShopImages />
      <div className="product-content">
        <MainProductItem
        inputs={inputs} setInputs={setInputs}
         mainProduct={mainProduct}
         />
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
