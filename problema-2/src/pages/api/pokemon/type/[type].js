/** 
 *  Dado un tipo de pokemon, devuelve la cantidad de pokemons de ese tipo
 * @param {string} type - Tipo de pokemon
 */
export default async function handler(req, res) {
    const {type} = req.query;
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    if (response.status !== 200) {
        res.status(404).json({ message: 'No se encontraron pokemones' });
    }
    const data = await response.json();
    res.status(200).json(data.pokemon.length);
}