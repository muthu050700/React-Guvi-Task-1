import { useState } from "react";
import "./App.css";
import DarkVariantExample from "./Components/Body";
import { BasicExample } from "./Components/Card";

import NavScrollExample from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  let [cartValue, setCartValue] = useState(0);
  const addingCartValue = () => {
    cartValue++;
    console.log(cartValue);
    setCartValue(cartValue);
  };
  const removingCartValue = () => {
    cartValue--;
    console.log(cartValue);
    setCartValue(cartValue);
  };
  return (
    <>
      <NavScrollExample cartValue={cartValue} />
      <DarkVariantExample />
      <BasicExample
        addingCartValue={addingCartValue}
        removingCartValue={removingCartValue}
      />
      <Footer />
    </>
  );
}

export default App;
