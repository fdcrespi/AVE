/**
 * Dado un arreglo de id de pokemones, y un orden (nombre, tipo o peso) devuelve un arreglo de pokemones ordenados
 * @param {string} order - Orden por el que se quiere ordenar
 * @param {string} ids - Arreglo de ids de pokemones
 */

export default async function handler(req, res) {
  const { order, ids } = req.query;

  //convertir ids a array
  const idsPokemon = (ids.split(','));

  if (!order || !idsPokemon) {
    res.status(404).json({ message: 'Parametros insuficientes' });
  }

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1280`);
  if (response.status !== 200) {
    res.status(404).json({ message: 'No se encontraron pokemones' });
  }
  const data = await response.json();
  const pokemons = data.results.map((pokemon) => {
    return {
      id: pokemon.url.split('/')[6],
      name: pokemon.name,
      url: pokemon.url
    }
  });

  const filteredPokemons = pokemons.filter((pokemon) => idsPokemon.includes(pokemon.id));
  
  const completePokemons = await Promise.all(filteredPokemons.map(async (pokemon) => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    return {
      name: pokemon.name,
      types: data.types,
      weight: data.weight
    }
  }));

  const orderedPokemons = completePokemons.sort((a, b) => {
    if (order === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (order === 'type') {
      return a.types[0].type.name.localeCompare(b.types[0].type.name);
    }
    if (order === 'weight') {
      return a.weight - b.weight;
    }
  });

  res.status(200).json(orderedPokemons);
}