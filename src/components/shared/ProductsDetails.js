import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { ProductsContexT } from "../../context/ProductsContext";
//style
import styles from "./ProductsDetails.module.css"
const ProductsDetails = () => {
  const params = useParams();
  const id = params.id;
  const data = useContext(ProductsContexT);
  const product = data[id - 1];
  const { title, image, description, category, price } = product;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} style={{ width: "200px" }} />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <span>category: </span>
          {category}
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price}$</span>
          <Link to="/products">back to shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
