import React, { useContext } from "react";

import { ProductsContexT } from "../context/ProductsContext";

import Product from "./shared/Product";

import styles from "../components/Store.module.css"

const Store = () => {
  const products = useContext(ProductsContexT);
  return (
    <div className={styles.container}>
      {products.map((i) => (
        <Product key={i.id} prod={i} />
      ))}
    </div>
  );
};

export default Store;
