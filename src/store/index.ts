import { configureStore } from '@reduxjs/toolkit'

import Dish from '../models/Dish'
import cartReducer from './reducers/cart'

const CART_STORAGE_KEY = 'efood:cart'

const loadCartItems = (): Dish[] => {
    if (typeof window === 'undefined') {
        return []
    }

    try {
        const storedCart = window.localStorage.getItem(CART_STORAGE_KEY)

        if (!storedCart) {
            return []
        }

        const parsedCart = JSON.parse(storedCart)

        if (!Array.isArray(parsedCart)) {
            return []
        }

        return parsedCart
    } catch (error) {
        console.error('Unable to load cart from localStorage:', error)

        return []
    }
}

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },

    preloadedState: {
        cart: {
            items: loadCartItems()
        }
    }
})

store.subscribe(() => {
    if (typeof window === 'undefined') {
        return
    }

    try {
        const items = store.getState().cart.items

        window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    } catch (error) {
        console.error('Unable to save cart to localStorage:', error)
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch