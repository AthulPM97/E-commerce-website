import { useContext } from "react";
import { Modal, Container, Button, Row, Col } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import Cart from "./Cart";
import "./CartModal.css";

const CartModal = (props) => {
  const cartCtx = useContext(CartContext);

  const total = cartCtx.items.reduce((tot, item) => {
    return tot + item.price * item.quantity;
  }, 0);

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title id="modal-title" className="text-center">
          CART
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={4} md={4}>
              <h3 className="text-center">ITEM</h3>
            </Col>
            <Col xs={4} md={4}>
              <h3 className="text-center">PRICE</h3>
            </Col>
            <Col xs={4} md={4}>
              <h3 className="text-center">QUANTITY</h3>
            </Col>
          </Row>
          <Cart />
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <h3>TOTAL: ${total}</h3>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
