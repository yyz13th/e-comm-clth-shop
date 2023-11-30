import { createContext, useState, useEffect, useReducer } from "react";

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
    isCartOpen: false, //checks whether the icon is pressed
    setIsCartOpen: () => {},
    cartItems: [], // basic state hence empty array
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
});



export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));  
    }
    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));  
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));  
    }
    const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemToCart, clearItemFromCart, cartItems, cartCount, cartTotal };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}