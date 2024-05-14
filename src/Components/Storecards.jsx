import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Storecards(props) {
  const [cartBtn, setCartBtn] = useState("add to cart");
  const { card, addingCartValue, removingCartValue } = props;
  const { category, description, image, price, rating } = card;
  return (
    <Card className="shoppingcard ">
      <Card.Img className="card-img" src={image} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <p>{price}</p>
        <p>{rating.rate}</p>
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
