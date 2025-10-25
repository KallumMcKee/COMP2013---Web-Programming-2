import CartCard from "./CartCard";
import ProductCardContainer from "./productCardContainer";
import QuanityContainer from "./QuanityContainer";
export default function CartContainer({
  cart,
  handleRemoveItem,
  handleChangeCartQuantity,
  handleEmptyCart,
}) {
  const totalItems = cart.reduce((sum, item) => sum + item.amount, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const priceFloat = parseFloat(item.price.replace("$", ""));
    return sum + priceFloat * item.amount;
  }, 0);

  return (
    <div className="CartContainer">
      <h3>Cart items: {totalItems}</h3>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          {Cart.map((item) => (
            <CartCard
              key={product.id}
              item={product}
              handleRemoveItem={handleRemoveItem}
              handleChangeCartQuantity={handleChangeCartQuantity}
            />
          ))}

          <div className="CartListBtns">
            <button className="RemoveButton" onClick={handleEmptyCart}>
              Empty is Cart
            </button>
            <button id="BuyButton">Checkout: ${totalPrice.toFixed(2)}</button>
          </div>
        </>
      )}
    </div>
  );
}
