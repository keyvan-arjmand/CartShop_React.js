import React, { useEffect, useState, createContext } from "react";

import { getProducts } from "../services/api";

export const ProductsContexT = createContext();

const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const FetchApi = async () => {
      setProducts(await getProducts());
    };
    FetchApi();
  }, []);

  return (
    <ProductsContexT.Provider value={products}>
      {children}
    </ProductsContexT.Provider>
  );
};

export default ProductsContext;
