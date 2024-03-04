import { PropTypes } from "prop-types";
import { createRef, useContext, useEffect } from "react";
import GlobalContext from "../GlobalContext";

export default function ShopProductItem({ productItem, inputs, setInputs }) {
  const {cart} = useContext(GlobalContext)
  const { name, price } = productItem;
  const ref = createRef();
  console.log(inputs);
  /**
   * Handles checked items 
   * if you have it checked it will add the product to inputs array
   * if you uncheck the item it remove the product from the array
   */



  function handleCheckedItem() {
   const findCartItem = cart.findIndex((item) => item.id === productItem.id);

    if (ref.current.checked) {
        /**
         * Condition that checks if item already is in cart and 
         * increments the quantity when checked
         * or removes it when unchecked
         */
        if(findCartItem !== -1 && inputs.length > 1){
          const arr = [...inputs];
          console.log(arr[findCartItem])
          arr[findCartItem] = {...arr[findCartItem], ["quantity"]: (cart[findCartItem].quantity + 1)}
          setInputs(arr);
        } else {
          setInputs((values) => [...values, productItem]);
        }
    } else {
      const arr = [...inputs];
      if(findCartItem !== -1 && inputs.length > 1){
        arr[findCartItem] = {...arr[findCartItem], ["quantity"]: (arr[findCartItem].quantity - 1)}
        setInputs(arr);
       } else {

      
      const findIndex = arr.findIndex((item) => item.id === productItem.id);
      setInputs([...arr.slice(0, findIndex), ...arr.slice(findIndex + 1)]);
    }
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
