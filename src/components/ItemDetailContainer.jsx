import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ItemDetailContainer.css';

import csgo2Img from '../assets/images/csgo2.jpg';
import pubgImg from '../assets/images/pubg.webp';
import warzoneImg from '../assets/images/warzone.jpg';
import subsistenceImg from '../assets/images/subsistence.jpg';
import rustImg from '../assets/images/rust.webp';
import strandedImg from '../assets/images/stranded.jpg';
import onceHumanImg from '../assets/images/once-human.jpg';
import evilWithinImg from '../assets/images/the-evil-within.jpg';

function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            const allItems = [
                { id: 1, name: 'Counter-Strike 2', description: 'Disparos en primera persona', price: '0.00', imageUrl: csgo2Img },
                { id: 2, name: 'PUBG', description: 'Battle Royale / Disparos (FPP y TPP)', price: '0.00', imageUrl: pubgImg },
                { id: 3, name: 'Call Of Duty: Warzone 2', description: 'Battle Royale / Disparos (FPP)', price: '0.00', imageUrl: warzoneImg },
                { id: 4, name: 'Subsistence', description: 'Mundo abierto / Fabricación y supervivencia', price: '7.79', imageUrl: subsistenceImg },
                { id: 5, name: 'Rust', description: 'Mundo abierto / Fabricación y supervivencia / Disparos', price: '18.99', imageUrl: rustImg },
                { id: 6, name: 'Stranded Deep', description: 'Mundo abierto / Fabricación y supervivencia', price: '19.99', imageUrl: strandedImg },
                { id: 7, name: 'Once Human', description: 'Fabricación y supervivencia / Terror', price: '0.00', imageUrl: onceHumanImg },
                { id: 8, name: 'The Evil Within', description: 'Supervivencia terrorífica / Aventura', price: '11.99', imageUrl: evilWithinImg },
            ];

            const foundItem = allItems.find(item => item.id === parseInt(id));
            setItem(foundItem);
        };

        fetchItem();
    }, [id]);

    return (
        <div className="item-detail-container">
            {item ? (
                <div className="item-detail">
                    <img src={item.imageUrl} alt={item.name} className="item-detail-image" />
                    <h1>{item.name}</h1>
                    <p>Descripción: {item.description}</p>
                    <p>Precio: ${item.price}</p>
                </div>
            ) : (
                <p>Producto no encontrado</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;
