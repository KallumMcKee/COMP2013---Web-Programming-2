import { useState } from "react";
import data from "../data/data";
const testProduct = data[0]; //import data for tsting

export default function ProductCard({
  product = testProduct.product,
  priceOptions = testProduct.productOptions, //adding deafult values inscase data is not provided so app wont break
  img = testProduct.img,
  quanity = testProduct.quanity,
}) {
  console.log(testProduct);
  const [productQuantity, setProductQuanity] = useState({
    // compound state to track product qty
    quanity,
    priceOptions: priceOptions[0],
  });

  //building our out put

  return (
    <div className="ProductCard">
      <img src={img} alt="" height="100px" />
      <h3>{Product}</h3>
      <p>quanity: {productQuantity.quanity}</p>
      <select
        value={productQuantity.priceOptions}
        onChange={(e) =>
          setProductQuanity({
            ...productQuantity,
            priceOptions: e.target.value,
          })
        }>
        {priceOptions.map((price, index) => (
          <option key={index} value={price}>
            {price.toFixed(2)}
          </option>
        ))}
      </select>
    </div>
  );
}
