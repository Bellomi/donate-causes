export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate items price
  state.itemsPrice = addDecimal(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Calculate shipping price (if order is over $100 then free, else $10 shipping)
  state.shippingPrice = addDecimal(state.itemsPrice > 100 ? 0 : 10);

  // Calculate tax price
  state.taxPrice = addDecimal(0.15 * state.itemsPrice);

  // Calculate total price
  state.totalPrice = addDecimal(
    Number(state.itemsPrice) +
      Number(state.shippingPrice) +
      Number(state.taxPrice)
  );

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
