import React from 'react';
import cartIcon from '../assets/images/carrito.png';

const CardWidget = () => {
    return (
        <div className="card-widget">
            <img src={cartIcon} alt="Carrito" className="cart-icon" />
            <span className="notification">3</span>
        </div>
    );
};

export default CardWidget;