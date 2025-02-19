import React, { useContext } from 'react';
import cartIcon from '../assets/images/carrito.png';
import { CartContext } from './CartContext';

const CardWidget = () => {
    const { cartItems } = useContext(CartContext);
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="card-widget">
            <img src={cartIcon} alt="Carrito" className="cart-icon" />
            <span className="notification">{itemCount}</span>
        </div>
    );
};

export default CardWidget;
