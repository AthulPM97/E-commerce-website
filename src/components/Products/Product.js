import { Button, Card, Col } from "react-bootstrap";
import './Product.css';
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Product = (props) => {

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (item) => {
    const itemToAdd = {
      ...item,
      id: item.title,
      quantity: 1
    }
    cartCtx.addItem(itemToAdd);
  }

  return (
    <Col xs={6}>
      <Card className="m-1">
        <h3 className="text-center">{props.title}</h3>
        <Card.Img variant="top" className="product-images" src={props.img} />
        <Card.Footer>
          <p className="mr-0">${props.price}</p>
          <Button variant="info" className="float-end" onClick={addToCartHandler.bind(null, props.item)}>ADD TO CART</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Product;
