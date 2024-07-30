import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    basket: [],
    basketTotalQuantity: 0,
    basketTotalAmount: 0,
    category: "all",
    sorting: "asc"
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addBasketItem: (state, action) => {
            const itemIndex = state.basket.findIndex((item) => item.id === action.payload.id);

            state.basketTotalQuantity += 1;
            state.basketTotalAmount += (action.payload.price.toFixed() * 100);

            if (itemIndex >= 0) {
                state.basket[itemIndex].quantity += 1;

            }
            else {
                state.basket.push({ ...action.payload, quantity: 1 });
            }
        },

        removeBasketItem: (state, action) => {
            const itemIndex = state.basket.findIndex((item) => item.id === action.payload.id);

            state.basketTotalQuantity -= state.basket[itemIndex].quantity;
            state.basketTotalAmount -= ((state.basket[itemIndex].price).toFixed() * state.basket[itemIndex].quantity * 100);

            state.basket.splice(itemIndex, 1);
        },

        increaseItemQuantity: (state, action) => {
            const itemIndex = state.basket.findIndex((item) => item.id === action.payload.id);

            if (state.basket[itemIndex].quantity < 10) {
                state.basket[itemIndex].quantity += 1;
                state.basketTotalQuantity += 1;
                state.basketTotalAmount += (action.payload.price.toFixed() * 100);
            }
        },

        decreaseItemQuantity: (state, action) => {
            const itemIndex = state.basket.findIndex((item) => item.id === action.payload.id);

            if (state.basket[itemIndex].quantity > 1) {
                state.basket[itemIndex].quantity -= 1;
                state.basketTotalQuantity -= 1;
                state.basketTotalAmount -= (action.payload.price.toFixed() * 100);
            }
        },

        clearBasket: (state) => {
            state.basket = [];
            state.basketTotalQuantity = 0;
            state.basketTotalAmount = 0;
        },

        changeCategory: (state, action) => {
            state.category = action.payload;
        },

        changeSorting: (state, action) => {
            state.sorting = action.payload;
        }

    }
})


export const { addBasketItem, removeBasketItem, increaseItemQuantity, decreaseItemQuantity, clearBasket, changeCategory, changeSorting } = basketSlice.actions;
export default basketSlice.reducer;