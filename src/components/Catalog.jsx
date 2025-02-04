import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Catalog() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
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

      const filteredProducts = categoryId
        ? allProducts.filter(product => product.category === categoryId)
        : allProducts;

      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <h1>Catálogo</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name} - ${product.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
