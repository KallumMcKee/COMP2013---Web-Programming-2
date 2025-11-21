// src/App.jsx
import "./App.css";
import colors from "./data/data";
import ColorBoxContainer from "./Components/ColorBoxContainer";

function App() {
  return (
    <div>
      <h1>Lab 3 - Colour Boxes</h1>
      <p>Click a box to change the color</p>
      <ColorBoxContainer colors={colors} />
    </div>
  );
}

export default App;
