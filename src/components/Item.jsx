import React from 'react';
import { Link } from 'react-router-dom';
import '../Item.css';

function Item({ id, name, imageUrl }) {
  return (
    <div className="item-container">
      <Link to={`/item/${id}`} className="item-link">
        <img src={imageUrl} alt={name} className="item-image" />
        <p>{name}</p>
      </Link>
    </div>
  );
}

export default Item;
