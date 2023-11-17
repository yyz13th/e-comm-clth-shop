import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
    isCartOpen: false, //checks whether the icon is pressed
    setIsCartOpen: () => {},
    cartItems: [], // basic state hence empty array
    addItemToCart: () => {},
    cartCount: 0
});



export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));  
    }
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}