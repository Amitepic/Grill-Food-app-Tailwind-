import { configureStore, createReducer} from "@reduxjs/toolkit";
import cartReducer from './cartSliece'

const appStore = configureStore({
    reducer:{
        cart : cartReducer,
    },
});

export default appStore;