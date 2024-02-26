import { PropTypes } from 'prop-types';

export default function ShopProductItem({ productItem }) {
  const { name, price } = productItem;
  return (
    <div className="product-item">
        <span>{name}&nbsp;&nbsp;&nbsp;&nbsp;</span>  <input type="checkbox" name="" />
        <span>&nbsp;&nbsp;{price} $</span>
    </div>
  );
}

ShopProductItem.propTypes = {
  productItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }) 
};
