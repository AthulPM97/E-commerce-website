import { useState } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
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

  const [items, setItems] = useState(cartElements);

  const removeItemHandler = (title) => {
    let newArray = [];
    items.forEach((item) => {
      if(item.title !== title) {
        newArray.push(item);
      }
    });
    setItems(newArray);
  };

  const cartItems = items.map((item) => {
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
