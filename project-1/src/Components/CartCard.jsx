export default function CartCard({ product, quantity, currentPrice }) {
  return (
    <div className="CartCard">
      <h2>{product}</h2>
      <p>Quantity: {quantity}</p>
      <p>Total Price: ${(quantity * currentPrice).toFixed(2)}</p>
    </div>
  );
}
