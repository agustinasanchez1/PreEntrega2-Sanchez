import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cartItems, clearCart } = useContext(CartContext);

    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {cartItems.length > 0 ? (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.name} - ${item.price} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <p>Total de artículos: {totalQuantity}</p>
                    <p>Total a pagar: ${totalPrice.toFixed(2)}</p>
                    <Link to="/checkout">
                        <button>Ir a Checkout</button>
                    </Link>
                    <button onClick={clearCart}>Vaciar Carrito</button>
                </>
            ) : (
                <p>El carrito está vacío</p>
            )}
        </div>
    );
}

export default Cart;
