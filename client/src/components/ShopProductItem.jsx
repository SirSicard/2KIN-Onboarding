import { PropTypes } from "prop-types";
import { createRef } from "react";

export default function ShopProductItem({ productItem, inputs, setInputs }) {
  const { name, price } = productItem;
  const ref = createRef();
  console.log(inputs);
  /**
   * Handles checked items 
   * if you have it checked it will add the product to inputs array
   * if you uncheck the item it remove the product from the array
   */
  function handleCheckedItem() {
    if (ref.current.checked) {
      setInputs((values) => [...values, productItem]);
    } else {
      const arr = [...inputs];
      const findIndex = arr.findIndex((item) => item.id === productItem.id);
      setInputs([...arr.slice(0, findIndex), ...arr.slice(findIndex + 1)]);
    }
  }

  return (
    <div className="product-item">
      <img src={productItem["product-image"]} alt="img" />
      <span>{name}&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
      <input
        ref={ref}
        value={productItem.id}
        onChange={() => handleCheckedItem()}
        type="checkbox"
        name=""
      />
      <span>&nbsp;&nbsp;{price} $</span>
    </div>
  );
}

ShopProductItem.propTypes = {
  productItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    "product-image": PropTypes.string.isRequired
  }),
  inputs: PropTypes.array.isRequired,
  setInputs: PropTypes.func.isRequired,
};
