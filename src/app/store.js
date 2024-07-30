import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./api/products.js";
import basketReducer from "./slices/basketSlice.js"


export const store = configureStore({
    reducer: {
        basket: basketReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

setupListeners(store.dispatch);