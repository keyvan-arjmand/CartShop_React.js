import React, { useContext } from "react";
import { Link } from "react-router-dom";
//context
import { CartContext } from "../context/CartContextProvider";
//components
import Cart from "./shared/Cart";
//styles
import styles from "./ShopCart.module.css";

const ShopCart = () => {
  const { state, dispathc } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItem.map((i) => (
          <Cart key={i.id} data={i} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>total Items:</span>
            {state.itemsCounter}
          </p>
          <p>
            <span>total Payment:</span>
            {state.total}$
          </p>

          <div className={styles.buttonContainer}>
            <button
              className={styles.checkout}
              onClick={() => dispathc({ type: "CHECKOUT" })}
            >
              Check Out
            </button>
            <button
              className={styles.clear}
              onClick={() => dispathc({ type: "CLEAR" })}
            >
              Clear
            </button>
          </div>
        </div>
      )}
      {state.cheackOut && (
        <div className={styles.complete}>
          <h3>Cheack Out SucssessFUlly</h3>
          <Link to="/product">Buy More</Link>
        </div>
      )}
      {!state.cheackOut && state.itemsCounter === 0 && (
        <div className={styles.complete}>
          <h3>Want to Buy?!</h3>
          <Link to="/product">Go to Shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
