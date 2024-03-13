import { PropTypes } from "prop-types";
import { useContext, useEffect } from "react";
import GlobalContext from "../GlobalContext";
export default function MainProductItem({
  triggerChildEffect,
  mainProduct,
  inputs,
  setInputs,
}) {
  const { cart } = useContext(GlobalContext);

  /*does not have any functionallity yet*/
  function handleSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    const findCartItem = cart.findIndex((item) => item.id === mainProduct.id);
    if (cart.length >= 1 && findCartItem !== -1) {
      const arr = [...inputs];
      arr[findCartItem] = {
        ...arr[findCartItem],
        ["quantity"]: 1 + cart[findCartItem].quantity,
      };
      setInputs(arr);
    }
  }, [triggerChildEffect]);

  /**
   * Function for handling the quantity of the main product
   * depending on user selected input.
   */
  function handleInputChange(event) {
    const findCartItem = cart.findIndex((item) => item.id === mainProduct.id);

    const { value } = event.target;
    /*This specific condition with preventDefault() i got from stackoverflow:
     https://stackoverflow.com/questions/67626486/how-to-restrict-user-input-from-0-to-99-in-javascript
    */
    if (value > 99 || value <= 0) {
      event.preventDefault();
      return;
    }

    const arr = [...inputs];
    const findIndex = arr.findIndex((item) => item.id == mainProduct.id);
    /**
     * Condition that if product already is in cart
     * adds up the quantity depending on use input plus
     * quantity in cart.
     */
    if (findCartItem !== -1) {
      arr[findIndex] = {
        ...arr[findIndex],
        ["quantity"]: parseInt(value) + cart[findCartItem].quantity,
      };
      setInputs(arr);
      /**
       * Condition to check if main product exist and increase
       * Product quantity depending on user input
       * If it does not exist it will add the main product to
       * array state
       */
    } else if (findIndex !== -1) {
      arr[findIndex] = { ...arr[findIndex], ["quantity"]: parseInt(value) };
      setInputs(arr);
    } else {
      setInputs((values) => [mainProduct, ...values]);
    }
  }

  return (
    <>
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
              defaultValue={mainProduct.quantity}
            />{" "}
            <input type="submit" hidden />
            &nbsp;&nbsp;&nbsp;
            <span>{mainProduct.price} $ st</span>
          </label>
        </form>
      </div>
    </>
  );
}

MainProductItem.propTypes = {
  mainProduct: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
  activeMain: PropTypes.string,
  inputs: PropTypes.array.isRequired,
  setInputs: PropTypes.func.isRequired,
  triggerChildEffect: PropTypes.bool.isRequired,
};
