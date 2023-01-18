import { useContext } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import './Cart.css';

const Cart = () => {

  const cartCtx = useContext(CartContext);

  const removeItemHandler = (item) => {
    cartCtx.removeItem(item);
  };

  console.log(cartCtx)

  const cartItems = cartCtx.items.map((item) => {
    console.log(item);
    return (
      <Row className="mr-3 mb-3" key={item.id}>
        <Col xs={4} md={4}>
          <Card>
            <img src={item.imageUrl} alt="" className="img-responsive" />
            <Card.Text>{item.title}</Card.Text>
          </Card>
        </Col>
        <Col xs={4} md={4}>
          <p className="text-center">${item.price}</p>
        </Col>
        <Col xs={4} md={4}>
          <input type="number" value={item.quantity} id="item-quantity" />
          <Button variant="danger" className="m-3" onClick={removeItemHandler.bind(null, item)}>REMOVE</Button>
        </Col>
      </Row>
    );
  });
  return cartItems;
};

export default Cart;
