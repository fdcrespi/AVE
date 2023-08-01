/**
 * Función que se encarga de mostrar la cantidad de pokemones por tipo
 * @param {string} type - Tipo de pokemon
 */

import { useEffect, useState } from "react";

export default function TypeQuantity() {

  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  },[]);

  const getQuantity = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`/api/pokemon/type/${type}`);
    if (response.status !== 200) {
      setLoading(false);
      return setQuantity('No se encontraron pokemones de ese tipo');
    }
    const data = await response.json();
    setQuantity(data);
    setLoading(false);
  };

  if (loading) return (<p>Cargando...</p>)

  return (
    <>
      <h1>Cantidad de pokemones por tipo</h1>
      <form onSubmit={getQuantity} style={{ marginBottom: '2rem'}}>
        <label htmlFor="type">Tipo de pokemon</label>
        <input
          id="type"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <p>{quantity}</p>
    </>
  );
} 