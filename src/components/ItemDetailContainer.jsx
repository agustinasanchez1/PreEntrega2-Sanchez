import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../main';
import { doc, getDoc } from 'firebase/firestore';
import { CartContext } from './CartContext';
import '../ItemDetailContainer.css';

function ItemDetailContainer() {
    const { id } = useParams();
    const { addItemToCart } = useContext(CartContext);
    const [item, setItem] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const itemRef = doc(db, 'games', id);
                const itemSnapshot = await getDoc(itemRef);

                if (itemSnapshot.exists()) {
                    const data = itemSnapshot.data();
                    const imageUrl = `/src/assets/images/${data.imageId}`;
                    setItem({ id: itemSnapshot.id, ...data, imageUrl });
                    setError('');
                } else {
                    setItem(null);
                    setError('Producto no encontrado');
                }
            } catch (error) {
                console.error('Error fetching item: ', error);
            }
        };

        fetchItem();
    }, [id]);

    const handleAddToCart = () => {
        if (item) {
            addItemToCart({ ...item, quantity: 1 });
            alert('Producto añadido al carrito');
        }
    };

    return (
        <div className="item-detail-container">
            {item ? (
                <div className="item-detail">
                    <img src={item.imageUrl} alt={item.title} className="item-detail-image" />
                    <h1>{item.title}</h1>
                    <p>Descripción: {item.description}</p>
                    <p>Precio: ${item.price}</p>
                    <button onClick={handleAddToCart}>Añadir al Carrito</button>
                </div>
            ) : (
                <p>{error}</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;
