import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";


const addCartItem = (cartItems, productToAdd) => {
    // if has productToAdd is true (id's are the same)
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    //check if existingCartItem true, then take caritem quantity and add 1 if not - stay the same
    if(existingCartItem){
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }
    //return new array with modify  cartItems
    return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    if(existingCartItem){
        return cartItems.map((cartItem) => 
            cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        );
    }
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}
export const CartContext = createContext({
    // isCartOpen: false, //checks whether the icon is pressed
    setIsCartOpen: () => {},
    // cartItems: [], // basic state hence empty array
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    // cartCount: 0,
    // cartTotal: 0
});

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}
const INITIAL_STATE = {
    isCartOpen: false, //checks whether the icon is pressed
    cartItems: [], // basic state hence empty array
    cartCount: 0,
    cartTotal: 0
}; 

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
            case CART_ACTION_TYPES.SET_IS_CART_OPEN:
                return {
                    ...state,
                    isCartOpen: payload
                }
        default: 
            throw new Error(`unhandled type of ${type} in cartReducer`);
    }
}

export const CartProvider = ({ children }) => {

    const [{cartItems, cartCount, cartTotal, isCartOpen}, dispatch] = useReducer(cartReducer, INITIAL_STATE); //instead of all 4 useState

    //newCartItems is passed after updating using add/remove/clear
    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{
                cartItems: newCartItems,
                cartTotal: newCartTotal,
                cartCount: newCartCount
            })
        );
    }

    const addItemToCart = (productToAdd) => {
       const newCartItems = addCartItem(cartItems, productToAdd);  
       updateCartItemsReducer(newCartItems);
    }
    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);  
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);  
    }

    const setIsCartOpen = (bool) => {
        dispatch(
            createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
       )
    }
    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        removeItemToCart, 
        clearItemFromCart, 
        cartItems, 
        cartCount, 
        cartTotal 
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}