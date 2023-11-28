import { useContext } from 'react';
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';
// import './cart-icon.styles.scss';

import {ShoppingIconContainer, CartIconContainer, ItemCount} from './cart-icon.styles.jsx';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toogleIsCartOpen}>
            <ShoppingIconContainer className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

 export default CartIcon;