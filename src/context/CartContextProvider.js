import React, { createContext, useReducer } from "react";

const initialState = {
  selectedItem: [],
  itemsCounter: 0,
  total: 0,
  cheackOut: false,
};
const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items
    .reduce((total, products) => total + products.price * products.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};
const cartReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItem.find((i) => i.id === action.payload.id)) {
        state.selectedItem.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItem: [...state.selectedItem],
        ...sumItems(state.selectedItem),
        cheackOut: false
      };
    case "REMOVE_ITEM":
      const newSelectedItem = state.selectedItem.filter(
        (i) => i.id !== action.payload.id
      );
      return {
        ...state,
        selectedItem: [...newSelectedItem],
        ...sumItems(newSelectedItem),
      };
    case "INCREASE":
      const IndexI = state.selectedItem.findIndex(
        (i) => i.id == action.payload.id
      );
      state.selectedItem[IndexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItem),
      };
    case "DECRISE":
      const IndexD = state.selectedItem.findIndex(
        (i) => i.id == action.payload.id
      );
      state.selectedItem[IndexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItem),
      };
    case "CHECKOUT":
      return {
        selectedItem: [],
        itemsCounter: 0,
        total: 0,
        cheackOut: true,
      };
    case "CLEAR":
      return {
        selectedItem: [],
        itemsCounter: 0,
        total: 0,
        cheackOut: false,
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispathc] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispathc }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
