/**
 * Se encarga de mostrar los pokemons que tienen dos tipos pasados por parametro
 * @param {string} type1 - Tipo de pokemon
 * @param {string} type2 - Tipo de pokemon
 *   */

import { useEffect, useState } from "react";

export default function PokemonTypes() {

  const [type1, setType1] = useState('');
  const [type2, setType2] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setLoading(false);
  },[]);

  const getPokemons = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`/api/pokemon/type/${type1}/${type2}`);
    if (response.status !== 200) {
      setLoading(false);
      return setMessage('No se encontraron pokemones de ese tipo');
    }
    const data = await response.json();
    console.log(data);
    if (data.length === 0) {
      setLoading(false);
      return setMessage('No se encontraron pokemones de ese tipo');
    }
    setMessage('');
    setPokemons(data);
    setLoading(false);
  };

  if (loading) return (<p>Cargando...</p>)

  return (
    <>
      <h1>Pokemones con 2 tipos</h1>
      <form onSubmit={getPokemons} style={{ marginBottom: '2rem'}}>
        <label htmlFor="type1">Tipo de pokemon 1</label>
        <input
          id="type1"
          type="text"
          value={type1}
          onChange={(e) => setType1(e.target.value)}
        />
        <label htmlFor="type2">Tipo de pokemon 2</label>
        <input
          id="type2"
          type="text"
          value={type2}
          onChange={(e) => setType2(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <ul>

        {
        message ? <p>{message}</p> :
        pokemons && pokemons.map((pokemon) => (
          <li key={pokemon.pokemon.name}>{pokemon.pokemon.name}</li>
        ))}
      </ul>
    </>
  );

}
