import { PropTypes } from "prop-types";
import { createRef, useContext, useEffect } from "react";
import GlobalContext from "../GlobalContext";
export default function MainProductItem({ mainProduct, inputs, setInputs }) {
  const { cart } = useContext(GlobalContext);
  const inputRef = createRef();
  /*does not have any functionallity yet*/
  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);
  }
  /**
   * Function for handling the quantity of the main product
   * depending on user selected input.
   */

    useEffect(() => {
      const cartItem = cart.findIndex((item) => item.id === mainProduct.id);
      if(cartItem !== -1 && !inputRef.current.focus()) {
        
        console.log(cartItem)
        const arr = [...inputs];
        const findMainIndex = arr.findIndex((item) => item.id === mainProduct.id);
        console.log(arr[findMainIndex])
        arr[findMainIndex] = {
          ...arr[findMainIndex],
          ["quantity"]: cart[cartItem].quantity + 1,
        };
        setInputs(arr);
      }
    }, [])

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
        ["quantity"]: parseInt((value)) + cart[findCartItem].quantity,
      };
      setInputs(arr);
    } else {
      arr[findIndex] = { ...arr[findIndex], ["quantity"]: parseInt(value) };
      setInputs(arr);
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
             ref={inputRef}
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
  inputs: PropTypes.array.isRequired,
  setInputs: PropTypes.func.isRequired,
};
