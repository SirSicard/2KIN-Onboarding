import { PropTypes } from "prop-types";
export default function MainProductItem({ mainProduct, inputs, setInputs }) {
  /*does not have any functionallity yet*/
  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);
  }
  /**
   * Function for handling the quantity of the main product
   * depending on user selected input.
   */
  function handleInputChange(event) {
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
    arr[findIndex] = { ...arr[findIndex], ["quantity"]: parseInt(value) };
    setInputs(arr);
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
  inputs: PropTypes.array.isRequired,
  setInputs: PropTypes.func.isRequired,
};
