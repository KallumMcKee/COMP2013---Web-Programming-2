import colors from "./data/data.js";
import ColorBox from "./ColorBox.jsx";
import React, { useState } from "react";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Lab 3</h1>
      <ColorBoxContainer colors={colors} />
    </div>
  );
}
export default App;
