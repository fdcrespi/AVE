/**
 * Dado el nombre de un pokemon, devuelve el numero del mismo
 * @param {string} name - Nombre del pokemon
 */

export default async function handler(req, res) {
    const { name } = req.query;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (response.status !== 200) {
        res.status(404).json({ message: 'No se encontraron pokemones' });
    }
    const data = await response.json();
    res.status(200).json(data.id);
}