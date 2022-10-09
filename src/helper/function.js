const shorten = (title) => {
  const spilited = title.split(" ");

  const newTitle = `${spilited[0]} ${spilited[1]}`;
  const newTitle2 = `${spilited[0]} ${spilited[2]}`;

  if (spilited[1] === "-") {
    return newTitle2;
  } else {
    return newTitle;
  }
};
const isInCart = (state, id) => {
  const result = !!state.selectedItem.find((i) => i.id === id);
  return result;
};
const quantityCounter = (state, id) => {
  const Index = state.selectedItem.findIndex((i) => i.id === id);
  if (Index === -1) {
    return false;
  } else {
    return state.selectedItem[Index].quantity;
  }
};

export { shorten, isInCart, quantityCounter };
