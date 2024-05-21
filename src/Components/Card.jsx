import { useEffect, useState } from "react";
import Storecards from "./Storecards";
import PropTypes from "prop-types";
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
    <div className="storecards m-4">
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

BasicExample.prototype = {
  addingCartValue: PropTypes.number,
  removingCartValue: PropTypes.number,
};
