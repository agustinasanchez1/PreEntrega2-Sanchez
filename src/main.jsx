import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { CartProvider } from './components/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyBetzI9uZaEp-zrFCVLJOO1eZjEQ44i5Nc",
  authDomain: "tinigames-c4dbb.firebaseapp.com",
  projectId: "tinigames-c4dbb",
  storageBucket: "tinigames-c4dbb.firebasestorage.app",
  messagingSenderId: "430619773117",
  appId: "1:430619773117:web:2888de3ba3d40ff5da4fd4"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
);
