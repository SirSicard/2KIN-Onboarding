import { createRef, useState } from "react";
import "../styles/shop.css";
import product from "../utils/products.json";
export default function ShopPage() {
  const ref = createRef();
  const clonedProduct = structuredClone(product);
  const [products, setProducts] = useState(clonedProduct);

  return (
    <div className={"shop-content"}>
      <div ref={ref} className={"image-content"}>
        <div className="selectedImage">
          <img
            src="https://www.shutterstock.com/image-photo/closeup-silicon-die-being-extracted-600nw-2262331365.jpg"
            alt="selectImage"
          />
        </div>
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg"
          alt="view 1"
        />
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg"
          alt="view 2"
        />
        <img
          src="https://www.shutterstock.com/image-photo/closeup-silicon-die-being-extracted-600nw-2262331365.jpg"
          alt="view 2"
        />
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg"
          alt="view 3"
        />
      </div>

      <div className="product-content">
       <h3>2KIN product</h3>
        <div>
          <label><span>Quantiy: </span>
          <input type="number" name="quantity" /> <span>20 $ st</span></label>
          </div>
         
          {products.map((item) => {
            return (
              <>
              <div>
                <span>{item.name}</span>{" "}
                <input type="checkbox" name="" key={item.id} />
                <span>{item.price} $</span></div>
              </>
            );
          })}
        
      </div>
      <div className="product-info">
        <button>Add to cart</button>

        <h3>Price 200 $</h3>

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
