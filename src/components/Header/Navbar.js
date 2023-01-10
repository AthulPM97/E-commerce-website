import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useState } from "react";
import CartModal from "../Cart/CartModal";

const Navigationbar = () => {
  
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const onHideHandler = () => {
    setShowCart(false);
  }
  
  return (
    <Navbar bg="dark" variant="dark">
      <CartModal show={showCart} onHide={onHideHandler}/>
      <Container>
        <Navbar.Brand href="#home">The Generics</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Button variant="outline-info" className="float-end" onClick={showCartHandler}>
          Cart
        </Button>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
