import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feature/cartSlice";
import productSlice from "./feature/productSlice"
const store=configureStore({
    reducer:{
        cart:cartSlice,
        products:productSlice
    }
});
export default store;