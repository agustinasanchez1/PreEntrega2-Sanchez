import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <main>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a TINI-GAMES!" />
      <div>
      </div>
    </main>
  );
}

export default App;