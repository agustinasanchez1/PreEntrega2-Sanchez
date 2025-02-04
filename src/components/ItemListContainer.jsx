import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import '../ItemListContainer.css';

import csgo2Img from '../assets/images/csgo2.jpg';
import pubgImg from '../assets/images/pubg.webp';
import warzoneImg from '../assets/images/warzone.jpg';
import subsistenceImg from '../assets/images/subsistence.jpg';
import rustImg from '../assets/images/rust.webp';
import strandedImg from '../assets/images/stranded.jpg';
import onceHumanImg from '../assets/images/once-human.jpg';
import evilWithinImg from '../assets/images/the-evil-within.jpg';

function ItemListContainer({ greeting }) {
    const { id: categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const allItems = [
                { id: 1, name: 'Counter-Strike 2', category: 'fps', imageUrl: csgo2Img },
                { id: 2, name: 'PUBG', category: 'battle-royale', imageUrl: pubgImg },
                { id: 3, name: 'Call Of Duty: Warzone 2', category: 'battle-royale', imageUrl: warzoneImg },
                { id: 4, name: 'Subsistence', category: 'open-world', imageUrl: subsistenceImg },
                { id: 5, name: 'Rust', category: 'open-world', imageUrl: rustImg },
                { id: 6, name: 'Stranded Deep', category: 'open-world', imageUrl: strandedImg },
                { id: 7, name: 'Once Human', category: 'survival-horror', imageUrl: onceHumanImg },
                { id: 8, name: 'The Evil Within', category: 'survival-horror', imageUrl: evilWithinImg },
            ];

            const filteredItems = categoryId
                ? allItems.filter(item => item.category === categoryId)
                : allItems;

            setItems(filteredItems);
        };

        fetchItems();
    }, [categoryId]);

    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
            {items.map(item => (
                <Item key={item.id} id={item.id} name={item.name} imageUrl={item.imageUrl} />
            ))}
        </div>
    );
}

export default ItemListContainer;
