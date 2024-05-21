import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Star from "./Star";
import PropTypes from "prop-types";
function Storecards(props) {
  const [cartBtn, setCartBtn] = useState("add to cart");
  const { card, addingCartValue, removingCartValue } = props;
  const { category, description, image, price, rating } = card;

  return (
    <Card className="shoppingcard relative">
      <div className="absolute top-0 right-0 m-2">
        {rating.rate >= 4 && (
          <p className="px-3 py-1 bg-black text-white rounded-lg text-end font-bold">
            sale
          </p>
        )}
      </div>

      <Card.Img className="card-img" src={image} />
      <Card.Body>
        <h4>{category}</h4>
        <p>Price : {price}</p>
        <Star count={rating.count} stars={rating.rate} rating={rating.rate} />
        <p>Count : {rating.count}</p>

        {rating.rate >= 4 ? (
          <Button
            className={`${
              cartBtn === "add to cart" ? "bg-primary" : "bg-danger"
            } `}
            onClick={() => {
              // cartBtn === "add to cart"
              //   ? setCartBtn("Remove from cart")
              //   : setCartBtn("add to cart");
              // addingCartValue();
              if (cartBtn === "add to cart") {
                setCartBtn("Remove from cart");
                addingCartValue();
              } else {
                setCartBtn("add to cart");
                removingCartValue();
              }
            }}
          >
            {cartBtn}
          </Button>
        ) : (
          <button className="px-2 py-[7px] rounded-lg text-white bg-sky-600">
            View option
          </button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Storecards;

Storecards.prototype = {
  card: PropTypes.object,
  addingCartValue: PropTypes.object,
  removingCartValue: PropTypes.object,
  category: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
};
