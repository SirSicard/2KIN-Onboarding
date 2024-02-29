
import { PropTypes } from 'prop-types';
export default function MainProductItem({mainProduct, inputs, setInputs}) {

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);

  }

  function handleInputChange(event) {
    const { value} = event.target;

    const arr = [...inputs];
    const findIndex = arr.findIndex((item) => item.id == mainProduct.id);
    arr[findIndex] = {...arr[findIndex], ["quantity"]: parseInt(value) }
    setInputs(arr)
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
              />{" "}
              <input type="submit" hidden />
              &nbsp;&nbsp;&nbsp;
              <span>{mainProduct.price} $ st</span>
            </label>
          </form>
        </div>
    </>
  )
}


MainProductItem.propTypes = {
    mainProduct: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    }),
    inputs: PropTypes.array.isRequired,
    setInputs: PropTypes.func.isRequired
};