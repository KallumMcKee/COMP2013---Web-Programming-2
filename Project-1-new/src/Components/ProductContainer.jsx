import ProductCard from "./ProductCard";
export default function ProductContainer({
  data,
  productQuantity,
  handleAddToQuantity,
  handleRemoveQuantity,
  handleAddToCart,
}) {
  return (
    <div className="ProductContainer">
      {data.map((product) => {
        const quantityObj = productQuantity.find((q) => q.id === product.id);
        const amount = quantityObj ? quantityObj.amount : 0;

        return (
          <ProductCard
            key={product.id}
            id={product.id}
            img={product.image}
            productName={product.productName}
            brand={product.brand}
            price={product.price}
            amount={amount}
            handleAddToQuantity={handleAddToQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
            handleAddToCart={handleAddToCart}
          />
        );
      })}
    </div>
  );
}
