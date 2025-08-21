import { createSlice } from '@reduxjs/toolkit';
import ProductList from './ProductList';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;

            const existedItem = state.items.find(item => item.name === name);
            if (existedItem) {
                existedItem.quantity++;
            }

            else {
                state.items.push({ name, image, cost, quantity: 1 })
            }

        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const targetItem = state.items.find(item => item.name === name);

            if (targetItem) {
                targetItem.quantity = quantity;
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
