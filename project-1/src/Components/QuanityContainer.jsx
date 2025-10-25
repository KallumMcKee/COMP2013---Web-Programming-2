export default function QuantityContainer({
  productQuantity,
  handleAddQuantity,
  handleRemoveQuantity,
  id,
  mode,
}) {
  return (
    <div className="ProductQuantity">
      <div>
        <button onClick={() => handleRemoveQuantity(id, mode)}>-</button>
      </div>
      <p>{productQuantity}</p>
      <div>
        <button onClick={() => handleAddQuantity(id, mode)}>+</button>
      </div>
    </div>
  );
}
