import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";






const Store = configureStore({
    reducer: {
        Counter: counterReducer,
    }
});

export default Store;