import Product from "./Product";
import { Container, Row } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = () => {
  const products = productsArr.map((product) => (
    <Product
      title={product.title}
      price={product.price}
      img={product.imageUrl}
    />
  ));
  return (
    <section id="products" className="container">
      <h2 className="display-3 text-center">Products</h2>
      <Container className="mt-3">
        <Row>
          {products}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
