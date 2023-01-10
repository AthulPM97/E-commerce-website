import { Button, Card, Col } from "react-bootstrap";
import './Product.css';

const Product = (props) => {
  return (
    <Col xs={6}>
      <Card >
        <h3 className="text-center">{props.title}</h3>
        <Card.Img variant="top" className="product-images" src={props.img} />
        <Card.Footer>
          <p className="mr-0">${props.price}</p>
          <Button variant="info" className="float-end">ADD TO CART</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Product;
