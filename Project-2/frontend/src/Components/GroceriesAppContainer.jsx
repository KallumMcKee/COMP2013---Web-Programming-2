import { useState, useEffect } from "react";
import axios from "axios";
import ProductsContainer from "./ProductContainer";
import CartContainer from "./CartContainer";
import NavBar from "./NavBar";

export default function GroceriesAppContainer() {
  const [products, setProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState([]);
  const [cart, setCart] = useState([]);

  // Load products from backend on first render
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        const items = response.data;

        setProducts(items);

        // initialize quantity state based on Mongo Id
        setProductQuantity(
          items.map((product) => ({
            id: product._id, // use Mongo Id as our Id
            amount: 0,
          }))
        );
      } catch (error) {
        console.log("Error loading products:", error.message);
      }
    };

    loadProducts();
  }, []);

  // --- Quantity logic ---

  const handleAddToQuantity = (productID) => {
    setProductQuantity((prev) =>
      prev.map((prod) =>
        prod.id === productID ? { ...prod, amount: prod.amount + 1 } : prod
      )
    );
  };

  const handleRemoveQuantity = (productID) => {
    setProductQuantity((prev) =>
      prev.map((prod) =>
        prod.id === productID && prod.amount > 0
          ? { ...prod, amount: prod.amount - 1 }
          : prod
      )
    );
  };

  //--- Cart logic ---

  // Add items to cart
  const handleAddToCart = (productID) => {
    const selected = products.find((p) => p._id === productID);
    const quantityInfo = productQuantity.find((q) => q.id === productID);
    const amount = quantityInfo?.amount || 0;

    if (!selected || amount === 0) return;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === productID);

      if (existing) {
        // increase amount if already in cart
        return prevCart.map((item) =>
          item.id === productID
            ? { ...item, amount: item.amount + amount }
            : item
        );
      } else {
        // add new entry to cart
        return [
          ...prevCart,
          {
            ...selected,
            id: productID, // store Mongo Id in id field for cart
            amount,
          },
        ];
      }
    });

    // reset quantity for that product back to 0 after adding
    setProductQuantity((prev) =>
      prev.map((p) => (p.id === productID ? { ...p, amount: 0 } : p))
    );
  };

  // Empty cart
  const handleEmptyCart = () => setCart([]);

  // Remove single item from cart
  const handleRemoveItem = (productID) => {
    setCart((prev) => prev.filter((item) => item.id !== productID));
  };

  // Change item quantity while in cart
  const handleChangeCartQuantity = (productID, newAmount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productID ? { ...item, amount: newAmount } : item
      )
    );
  };

  return (
    <div>
      <NavBar />
      <div className="GroceriesApp-Container">
        <ProductsContainer
          data={products}
          productQuantity={productQuantity}
          handleAddToQuantity={handleAddToQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleAddToCart={handleAddToCart}
        />

        <CartContainer
          cart={cart}
          handleRemoveItem={handleRemoveItem}
          handleChangeCartQuantity={handleChangeCartQuantity}
          handleEmptyCart={handleEmptyCart}
        />
      </div>
    </div>
  );
}
