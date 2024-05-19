import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PropTypes from "prop-types";
function NavScrollExample({ cartValue }) {
  console.log(cartValue);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Shopify </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">All Products</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Popular Items</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">New Arrivals</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <div className="d-flex">
              <button>
                <div className="nav-btn">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <h6>Cart</h6>
                  <p id="show-cart">{cartValue}</p>
                </div>
              </button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

NavScrollExample.prototype = {
  cartValue: PropTypes.number,
};
