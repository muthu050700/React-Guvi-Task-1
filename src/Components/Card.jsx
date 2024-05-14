import { useEffect, useState } from "react";
import Storecards from "./Storecards";

export function BasicExample({ addingCartValue, removingCartValue }) {
  // forCartValue();
  const [storeApiData, setStoreApiData] = useState([]);
  useEffect(() => {
    fetchingAPI();
  }, []);
  async function fetchingAPI() {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    console.log(json);
    setStoreApiData(json);
  }
  return (
    <div className="storecards">
      {storeApiData.map((value) => {
        return (
          <Storecards
            card={value}
            key={value.id}
            addingCartValue={addingCartValue}
            removingCartValue={removingCartValue}
          />
        );
      })}
    </div>
  );
}
