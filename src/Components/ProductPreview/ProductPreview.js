import React from "react";
import Card from "../UI/Card/Card";
import classes from "./ProductPreview.module.css";
import productImg from "../../Resources/image-product-desktop.jpg";
import cartSVG from "../../Resources/Icons/icon-cart.svg";
import Button from "../UI/Button/Button";
const ProductPreview = (props) => {
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <img className={classes.perfumeImg} src={productImg} alt="" />
        <section className={classes.content}>
          <p className={classes.product}>PERFUME</p>
          <h2>Gabrielle Essence Eau De Parfum</h2>
          <p className={classes.description}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <p className={classes.price}>
            $149.99 <span>$169.99</span>
          </p>

          <Button className={classes.orderButton}>
            <img src={cartSVG} alt="" />
            Add to Cart
          </Button>
        </section>
      </Card>
    </React.Fragment>
  );
};

export default ProductPreview;
