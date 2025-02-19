import React, { useState, useContext } from 'react';
import { db } from '../main';
import { collection, addDoc } from 'firebase/firestore';
import { CartContext } from './CartContext';

function Checkout() {
    const { cartItems, clearCart } = useContext(CartContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [orderId, setOrderId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email !== confirmEmail) {
            alert("Los emails no coinciden!");
            return;
        }

        const newOrder = {
            items: cartItems,
            date: new Date(),
            status: 'generada',
            customer: {
                firstName,
                lastName,
                phone,
                email
            }
        };

        try {
            const docRef = await addDoc(collection(db, 'orders'), newOrder);
            setOrderId(docRef.id);
            alert(`Orden generada con ID: ${docRef.id}`);
            clearCart();
        } catch (e) {
            console.error('Error añadiendo la orden: ', e);
        }
    };

    return (
        <div>
            {orderId ? (
                <div>
                    <h2>Gracias por tu compra!</h2>
                    <p>Tu ID de orden es: {orderId}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </label>
                    <label>
                        Apellido:
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </label>
                    <label>
                        Teléfono:
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Confirmar Email:
                        <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} required />
                    </label>
                    <button type="submit">Confirmar Compra</button>
                </form>
            )}
        </div>
    );
}

export default Checkout;
