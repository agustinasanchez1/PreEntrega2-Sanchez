import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a TINI-GAMES!" />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
