import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';  

// import './cart-dropdown.styles.scss';
import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext); //imnport cartItems array whenever it is empty or not


            //applying useNavigate to use checkout rounte
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )

};

export default CartDropdown;