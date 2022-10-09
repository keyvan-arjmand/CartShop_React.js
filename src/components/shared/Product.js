import React, { useContext } from "react";

import { Link } from "react-router-dom";
//function
import { shorten, isInCart, quantityCounter } from "../../helper/function";
//context
import { CartContext } from "../../context/CartContextProvider";
//icons
import styles from "./Product.module.css";

const Product = ({ prod }) => {
  const { state, dispathc } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <img
        className={styles.cardImage}
        style={{ width: "200px" }}
        src={prod.image}
      />
      <h1>{shorten(prod.title)}</h1>
      <p>{prod.price}$</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${prod.id}`}>Detail</Link>
        <div className={styles.buttonContainer}>
          {quantityCounter(state, prod.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() => {
                dispathc({ type: "DECRISE", payload: prod });
              }}
            >
              -
            </button>
          )}
          {quantityCounter(state, prod.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() => {
                dispathc({ type: "REMOVE_ITEM", payload: prod });
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                alt="icon"
                style={{ width: "20px" }}
              />
            </button>
          )}
          {quantityCounter(state, prod.id) > 0 && (
            <span className={styles.counter}>{quantityCounter(state, prod.id)}</span>
          )}
          {isInCart(state, prod.id) ? (
            <button
              className={styles.smallButton}
              onClick={() => {
                dispathc({ type: "INCREASE", payload: prod });
              }}
            >
              +
            </button>
          ) : (
            <button
              onClick={() => {
                dispathc({ type: "ADD_ITEM", payload: prod });
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
