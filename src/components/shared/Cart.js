import React, { useContext } from "react";
//conetxt
import { CartContext } from "../../context/CartContextProvider";
//function
import { shorten } from "../../helper/function";
//styles
import styles from "./Cart.module.css";

const Cart = (props) => {
  const { dispathc } = useContext(CartContext);
  const { image, title, price, quantity } = props.data;
  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={image} />
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button
            onClick={() => {
              dispathc({ type: "DECRISE", payload: props.data });
            }}
          >
            -
          </button>
        ) : (
          <button
            onClick={() => {
              dispathc({ type: "REMOVE_ITEM", payload: props.data });
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
              alt="icon"
              style={{ width: "20px" }}
            />
          </button>
        )}
        {
          <button
            onClick={() => {
              dispathc({ type: "INCREASE", payload: props.data });
            }}
          >
            +
          </button>
        }
      </div>
    </div>
  );
};

export default Cart;
