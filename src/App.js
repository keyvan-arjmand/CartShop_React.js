import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
//component
import Store from "./components/Store";
import ProductsDetails from "./components/shared/ProductsDetails";
import ShopCart from "./components/ShopCart";
//context
import ProductsContext from "./context/ProductsContext";
import CartContextProvider from "./context/CartContextProvider";
import Nabar from "./components/shared/Nabar";

function App() {
  return (
    <ProductsContext>
      <CartContextProvider>
        <Nabar/>
        <Routes>
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/products" element={<Store />} />
          <Route path="/*" element={<Navigate to="/products" />} />
          <Route path="/" element={<Store />} />
        </Routes>
      </CartContextProvider>
    </ProductsContext>
  );
}

export default App;
