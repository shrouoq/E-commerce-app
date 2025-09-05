import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "../slice/DataSlice";
import cartSlice from "../slice/cart";
import filterSlice from "../slice/filter";
const Store = configureStore({
  reducer: { DataSlice, cart: cartSlice, filter: filterSlice },
});

export default Store;
