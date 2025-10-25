import "./App.css";
import ProductCardContainer from "../Components/ProductCardContainer";

import data from "./data/products";

function App() {
  return <>{<ProductCardContainer data={data} />}</>;
}
export default App;
