import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Dish from '../../models/Dish'

type CartState = {
    items: Dish[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Dish>) => {
            const dish = state.items.find((item) => item.id === action.payload.id)

            if (!dish) {
                state.items.push(action.payload)
            }
        },

        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },

        clear: (state) => {
            state.items = []
        }
    }
})

export const { add, remove, clear } = cartSlice.actions

export default cartSlice.reducer