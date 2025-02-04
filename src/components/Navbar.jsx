import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <div>
                <Link to="/category/fps">FPS</Link>
                <Link to="/category/battle-royale">Battle Royale</Link>
                <Link to="/category/open-world">Open World</Link>
                <Link to="/category/survival-horror">Survival Horror</Link>
            </div>
            <div>Cart (0)</div> { }
        </nav>
    );
}

export default Navbar;
