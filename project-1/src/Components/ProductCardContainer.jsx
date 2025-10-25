import ProductCard from "./ProductCard";
import ProductApp from "./productApp";
export default function ProductCardContainer({
  data,
  productQuantity,

  handelOnChangePrice,
  handleAddtoQuanity,
  handleRemoveQuantity,
}) {
  return (
    <div className="ProductCardContainer">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          productQuantity={productQuantity.find(
            (prod) => prod.id == product.id
          )}
          handelOnChangePrice={handelOnChangePrice}
          handleAddtoQuanity={handleAddtoQuanity}
          handleRemoveQuantity={handleRemoveQuantity}
        />
      ))}
    </div>
  );
}
