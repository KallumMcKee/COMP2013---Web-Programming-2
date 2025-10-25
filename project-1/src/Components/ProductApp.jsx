import { useState } from "react";
import ProductCardContainer from "./productCardContainer";

export default function ProductApp({ data }) {
  const [productQuantity, setProductQuantity] = useState(
    data.map((prod) => {
      return {
        id: prod.id,
        quantity: prod.quantity,
        priceOptions: prod.priceOptions,
        currentPrice: prod.priceOptions[0],
      };
    })
  );
  const [cart, setCart] = useState([]);
  const handleOnChangePrice = (productId, e) => {
    const newProductQuantity = productQuantity.map((prod) => {
      if (prod.id == productId) {
        return { ...prod, currentPrice: e.target.value };
      }
      return prod;
    });
    setProductQuantity(newProductQuantity);
    return;
  };
  const handleAddToQuantity = (productId) => {
    const newProductQuantity = productQuantity.ma((prod) => {
      if (prod.id === productId) {
        return { ...prod, quantity: prod.quantity + 1 };
      }
      return prod;
    });
    setProductQuantity(newProductQuantity);
    return;
  };
  const handleRemoveQuantity = (proudctId) => {
    const newProductQuantity = productQuantity.map((prod) => {
      if (prod.id === productId && prod.quantity > 0) {
        return { ...prod, quanity: prod.quanity - 1 };
      }
      return prod;
    });
    setProductQuantity(newProductQuantity);
    return;
  };
  return (
    <div>
      <ProductCardsContainer
        data={data}
        productQuantity={productQuantity}
        handleOnChangePrice={handleOnChangePrice}
        handleAddToQuantity={handleAddToQuantity}
        handleRemoveQuantity={handleRemoveQuantity}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}
