import { useState } from "react";
import "../styles/shop.css";
import product from "../utils/products.json";
import ShopImages from "../components/ShopImages";
import ShopProductContent from "../components/ShopProductContent";
export default function ShopPage() {
  const clonedProduct = structuredClone(product);
  const [products, setProducts] = useState(clonedProduct);

  const mainProduct = products[0];

  console.log(mainProduct);

  return (
    <div className={"shop-content"}>
      <ShopImages />
      <div className="product-content">
        <h3>{mainProduct.name}</h3>
        <div>
          <label>
            <span>Quantiy: </span>
            <input type="number" name="quantity" />{" "}
            <span>{mainProduct.price} $ st</span>
          </label>
        </div>
        {/* Maps out all products except for the "main product" */}
        {products
          .filter((item) => !item.name.includes("2KIN"))
          .map((item) => {
            return <ShopProductContent details={item} key={item.id} />;
          })}
      </div>
      <div className="product-info">
        <button>Add to cart</button>

        <h3>Price: 200 $</h3>

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
