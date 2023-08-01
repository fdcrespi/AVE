/**
 * Se encarga de mostrar los pokemons que tienen dos tipos pasados por parametro
 * @param {string} type1 - Tipo de pokemon
 * @param {string} type2 - Tipo de pokemon
 *   */

import { Box, Button, List, ListItem, TextField, Typography } from "@mui/material";
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
    <Box sx={{ p:5, m:5 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Buscar pokemones por tipos
      </Typography>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1 },
          mb: 2,
        }}
        noValidate
        autoComplete="off"
        onSubmit={getPokemons}
      >
        <Typography variant="h6" component="div" gutterBottom>
          Ingrese dos tipos de pokemon para obtener los pokemones que tengan esos tipos
        </Typography>
        <TextField name="type1" id="type1" label="Tipo de pokemon 1" variant="standard" value={type1} onChange={(e) => setType1(e.target.value)} required/>
        <TextField name="type2" id="type2" label="Tipo de pokemon 2" variant="standard" value={type2} onChange={(e) => setType2(e.target.value)} required/>
        <Button variant="contained" type="submit">Buscar</Button>
      </Box>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        <Typography variant="h5" component="h5" gutterBottom>
          Pokemones encontrados:
        </Typography>
        {
          message ? <Typography variant="h6" component="h6" gutterBottom>{message}</Typography> :
          pokemons && pokemons.map((pokemon) => (
            <Box variant="div" sx={{ display: 'flex', justifyContent: 'center' }}>
              <ListItem key={pokemon.pokemon.name} sx={{ fontSize: 25 }}>
                {pokemon.pokemon.name}
              </ListItem>
            </Box>
          ))

        }
      </List>

      

      <Button variant="contained" href="/">Volver</Button>
    </Box>
  );

}
