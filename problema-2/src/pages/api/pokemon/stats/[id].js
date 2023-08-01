/**
 * Dado el numero de un pokemon, devuelve un objeto con sus 6 stats base
 * @param {string} id - Numero del pokemon
 *  */

export default async function handler(req, res) {
  const { id } = req.query;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (response.status !== 200) {
    res.status(404).json({ message: 'No se encontraron pokemones' });
  }
  const data = await response.json();
  const stats = data.stats.map((stat) => {
    return {
      name: stat.stat.name,
      value: stat.base_stat
    }
  });
  res.status(200).json(stats);
}