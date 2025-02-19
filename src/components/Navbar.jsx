import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import CardWidget from './CardWidget';

function Navbar() {
    const itemCount = 5;

    return (
        <nav>
            <Link to="/">Home</Link>
            <div className="dropdown">
                <button className="dropbtn">Categorías</button>
                <div className="dropdown-content">
                    <Link to="/category/fps">FPS</Link>
                    <Link to="/category/battle-royale">Battle Royale</Link>
                    <Link to="/category/open-world">Open World</Link>
                    <Link to="/category/survival-horror">Survival Horror</Link>
                </div>
            </div>
            <Link to="/cart">
                <CardWidget itemCount={itemCount} />
            </Link>
        </nav>
    );
}

export default Navbar;
