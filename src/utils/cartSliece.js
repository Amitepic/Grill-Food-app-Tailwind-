import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addCart:(state,action) => {
            // mutating the state (direct modify the state)
            state.items.push(action.payload);
        },
        removeCart:(state) => {
            state.items.pop()
        },
        clearCart:(state) => {
             state.items.length=0
            // state.items = []
        }

    }
});



export const {addCart,removeCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;