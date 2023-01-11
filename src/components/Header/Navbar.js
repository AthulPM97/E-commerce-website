import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import CartModal from "../Cart/CartModal";
import "./Navbar.css";
import CartContext from "../../store/cart-context";

const Navigationbar = () => {
  const cartCtx = useContext(CartContext);

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const onHideHandler = () => {
    setShowCart(false);
  };

  const cartItemCount = cartCtx.items.length;

  return (
    <Navbar bg="dark" variant="dark" className="fixed-top">
      <CartModal show={showCart} onHide={onHideHandler} />
      <Container>
        <Navbar.Brand href="#home">The Generics</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/store">Store</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Button
          variant="outline-info"
          className="float-end"
          onClick={showCartHandler}
        >
          Cart<span className="badge">{cartItemCount}</span>
        </Button>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
