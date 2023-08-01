/**
 * Dado dos tipos de pokemon, devuelve los pokemons que cumplen con ambos tipos
 * @param {string} type1 - Tipo de pokemon
 * @param {string} type2 - Tipo de pokemon
 */

export default async function handler(req, res) {
  const type1 = req.query.types[0];
  const type2 = req.query.types[1];
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type1}`);
  const response2 = await fetch(`https://pokeapi.co/api/v2/type/${type2}`);

  if (response.status !== 200 || response2.status !== 200) {
    res.status(404).json({
      message: 'No se encontraron pokemones'
    });
  }
  const data = await response.json();
  const data2 = await response2.json();
  const pokemons = data.pokemon.filter(pokemon => data2.pokemon.some(pokemon2 => pokemon2.pokemon.name === pokemon.pokemon.name));
  res.status(200).json(pokemons);
}