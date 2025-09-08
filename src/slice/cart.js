import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalAmount: 0,
  totalQuantity: 0,
};

const saveToLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((el) => el.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity || 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }
      saveToLocalStorage(state.cartItems);
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((el) => el.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      saveToLocalStorage(state.cartItems);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((el) => el.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (el) => el.id !== action.payload
          );
        }
      }
      saveToLocalStorage(state.cartItems);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      saveToLocalStorage(state.cartItems);
    },

    clearCart: (state) => {
      state.cartItems = [];
      saveToLocalStorage([]);
    },

    calculateTotals: (state) => {
      let amount = 0;
      let quantity = 0;

      state.cartItems.forEach((el) => {
        const price = Number(el.price);
        const discountValue = el.discount
          ? Number(el.discount.replace("%", "")) / 100
          : 0;
        const finalPrice = price - price * discountValue;

        amount += finalPrice * el.quantity;
        quantity += el.quantity;
      });

      state.totalAmount = amount;
      state.totalQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
