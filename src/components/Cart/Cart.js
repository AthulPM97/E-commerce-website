import { useContext, useState } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import './Cart.css';

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = () => {

  const cartCtx = useContext(CartContext);

  const removeItemHandler = (title) => {
    
  };

  const cartItems = cartCtx.items.map((item) => {
    return (
      <Row className="mr-3 mb-3">
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
          <Button variant="danger" className="m-3" onClick={removeItemHandler.bind(null, item.title)}>REMOVE</Button>
        </Col>
      </Row>
    );
  });
  return cartItems;
};

export default Cart;
