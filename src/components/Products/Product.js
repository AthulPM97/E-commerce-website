import { Button, Card, Col } from "react-bootstrap";
import "./Product.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (item) => {
    const itemToAdd = {
      ...item,
      id: item.title,
      quantity: 1,
    };
    cartCtx.addItem(itemToAdd);
  };

  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="m-1">
        <h3 className="text-center">{props.title}</h3>
        <Link to={{pathname: "/store/product", state:props}}>
          <Card.Img variant="top" className="product-images" src={props.img} />
        </Link>
        <Card.Footer>
          <p className="mr-0">${props.price}</p>
          <Button
            variant="info"
            className="float-end"
            onClick={addToCartHandler.bind(null, props.item)}
          >
            ADD TO CART
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Product;
