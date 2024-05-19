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
    <Card className="shoppingcard ">
      <Card.Img className="card-img" src={image} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <p>Price : {price}</p>
        <Star count={rating.count} stars={rating.rate} rating={rating.rate} />
        <p>Count : {rating.count}</p>
        <Button
          className={`${
            cartBtn === "add to cart" ? "bg-primary" : "bg-danger"
          }`}
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
