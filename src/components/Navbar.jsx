import React from 'react';
import logo from '../assets/images/logo.png';
import CardWidget from './CardWidget';

function Navbar() {
    return (
        <nav className="nav__list">
            <div className="logo">
                <a href="../index.html"><img src={logo} alt="Icono" /></a>
            </div>
            <ul>
                <li><a href="../index.html">Inicio</a></li>
                <li><a href="tienda.html">Tienda</a></li>
                <li><a href="soporte.html">Soporte</a></li>
                <li><a href="experiencias.html">Experiencias</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
            <CardWidget />
        </nav>
    );
}

export default Navbar;