export default function ShopProductContent({ details }) {
  const { name, price } = details;
  return (
    <div>
      <div>
        <span>{name}</span> <input type="checkbox" name="" />
        <span>{price} $</span>
      </div>
    </div>
  );
}
