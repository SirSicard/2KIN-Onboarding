export default function ShopProductItem({ details }) {
  const { name, price } = details;
  return (
    <div className="product-item">
        <span>{name}&nbsp;&nbsp;&nbsp;&nbsp;</span>  <input type="checkbox" name="" />
        <span>&nbsp;&nbsp;{price} $</span>
    </div>
  );
}
