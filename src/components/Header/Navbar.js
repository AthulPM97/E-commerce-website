import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import CartModal from "../Cart/CartModal";
import "./Navbar.css";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";

const Navigationbar = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    cartCtx.getItems();
    setShowCart(true);
  };

  const onHideHandler = () => {
    setShowCart(false);
  };
  const logoutHandler = () => {
    authCtx.logout();
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
          {!authCtx.isLoggedin && <Nav.Link href="/login">Login</Nav.Link>}
          <Nav.Link href="/contact-us">Contact Us</Nav.Link>
        </Nav>
        {authCtx.isLoggedin && <Button
          variant="outline-info"
          className="float-end"
          onClick={showCartHandler}
        >
          Cart<span className="badge">{cartItemCount}</span>
        </Button>}
      </Container>
      {authCtx.isLoggedin && <Button variant="danger" className="m-1" onClick={logoutHandler}>
        Logout
      </Button>}
    </Navbar>
  );
};

export default Navigationbar;
