import { useLocation } from "react-router-dom";
import classes from "./ProductDetails.module.css";

const ProductDetail = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <section className={classes.wrapper}>
      <h1>{data.title}</h1>
      <img src={data.img} alt="product details img" />
      <span>4.5 reviews</span>
      <div>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      <p>Nice product</p>
      </div>
      <p>${data.price}</p>
    </section>
  );
};

export default ProductDetail;
