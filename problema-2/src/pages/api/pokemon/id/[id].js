/**
 * Dado el id de un pokemon, devuelve todos los datos del mismo
 * @param {string} id - Id del pokemon
 */

export default async function handler(req, res) {
  const { id } = req.query;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (response.status !== 200) {
      res.status(404).json({ message: 'No se encontraron pokemones' });
  }
  const data = await response.json();
  res.status(200).json(data);
}