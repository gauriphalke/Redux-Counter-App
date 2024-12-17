import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:'Counter',
    initialState:{
        value : 0,
    },
    reducers:{
        increment: (state) => {
            state.value +=1;
        },
        decrement: (state) => {
            state.value -=1;
        },
        reset: (state) => {
            state.value =0;
        },
    },
});


export const {increment, decrement, reset} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;