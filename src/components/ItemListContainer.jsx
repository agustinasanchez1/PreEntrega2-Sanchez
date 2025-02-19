import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../main';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Item from './Item';
import '../ItemListContainer.css';

function ItemListContainer({ greeting }) {
    const { id: categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                let q = collection(db, 'games');
                if (categoryId) {
                    q = query(q, where('categoryId', '==', categoryId));
                }
                const querySnapshot = await getDocs(q);
                const fetchedItems = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    const imageUrl = `/src/assets/images/${data.imageId}`;
                    return { id: doc.id, ...data, imageUrl };
                });
                setItems(fetchedItems);
            } catch (error) {
                console.error('Error fetching items: ', error);
            }
        };

        fetchItems();
    }, [categoryId]);

    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
            {items.length > 0 ? (
                items.map(item => (
                    <Item key={item.id} id={item.id} name={item.title} imageUrl={item.imageUrl} />
                ))
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
}

export default ItemListContainer;
