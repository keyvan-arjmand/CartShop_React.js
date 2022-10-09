import React, { useContext } from "react";
import { Link } from "react-router-dom";
//context
import { CartContext } from "../../context/CartContextProvider";
//styles
import styles from "./Navbar.module.css"
const Nabar = () => {
  const { state } = useContext(CartContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">Products</Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081415.png"
              style={{ width: "50px" }}
            />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Nabar;
