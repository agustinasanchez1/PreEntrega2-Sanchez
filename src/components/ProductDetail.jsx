import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const allProducts = [
  { id: 1, name: 'Counter-Strike 2', price: '0.00', description: 'Disparos en primera persona', category: 'fps' },
  { id: 2, name: 'PUBG', price: '0.00', description: 'Battle Royale / Disparos (FPP y TPP)', category: 'battle-royale' },
  { id: 3, name: 'Call Of Duty: Warzone 2', price: '0.00', description: 'Battle Royale / Disparos (FPP)', category: 'battle-royale' },
  { id: 4, name: 'Subsistence', price: '7.79', description: 'Mundo abierto / Fabricación y supervivencia', category: 'open-world' },
  { id: 5, name: 'Rust', price: '18.99', description: 'Mundo abierto / Fabricación y supervivencia / Disparos', category: 'open-world' },
  { id: 6, name: 'Stranded Deep', price: '19.99', description: 'Mundo abierto / Fabricación y supervivencia', category: 'open-world' },
  { id: 7, name: 'Once Human', price: '0.00', description: 'Fabricación y supervivencia / Terror', category: 'survival-horror' },
  { id: 8, name: 'The Evil Within', price: '11.99', description: 'Supervivencia terrorífica / Aventura', category: 'survival-horror' },
];

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const foundProduct = allProducts.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <h1>Detalle de Producto</h1>
      {product ? (
        <div>
          <p>ID: {product.id}</p>
          <p>Nombre: {product.name}</p>
          <p>Precio: ${product.price}</p>
          <p>Descripción: {product.description}</p>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
}

export default ProductDetail;
