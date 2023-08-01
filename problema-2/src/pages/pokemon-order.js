/**
 * Muestra un arreglo de pokemones ordenados por nombre, tipo o peso
 * @param {string} order - Orden por el que se quiere ordenar
 * @param {string} ids - Arreglo de ids de pokemones
 */

import { Box, Button, FormControl, InputLabel, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function PokemonOrder() {
  const [order, setOrder] = useState('name');
  const [pokemons, setPokemons] = useState([]);
  const [ids, setIds] = useState('');

  const getPokemons = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/pokemon/order/${order}?ids=${ids}`);
    const data = await response.json();
    setPokemons(data);
  }

  return (
    <Box sx={{m: 5, p: 5}}>
      <Typography variant="h5" component="div" gutterBottom>
        Pokemones ordenados
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        Ingrese los ids de los pokemones que quiere ordenar
      </Typography>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1 },
          mb: 2,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'start',
        }}
        noValidate
        autoComplete="off"
        onSubmit={getPokemons}
      >
        <FormControl variant="standard" sx={{display:'flex', flexDirection: 'row', gap: 2}}>
          <InputLabel htmlFor="order">Ordenar por</InputLabel>
          <Select
            native
            id="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="name">Nombre</option>
            <option value="type">Tipo</option>
            <option value="weight">Peso</option>
          </Select>
          <TextField id="ids" label="Ids de pokemones" variant="standard" value={ids} onChange={(e) => setIds(e.target.value)} placeholder="1,2,3,4,5" />
          <Button type="submit">Buscar</Button>
        </FormControl>

      </Box>

      { pokemons && <Typography variant="h6" component='p' sx={{mb: 2}}>{JSON.stringify(pokemons)}</Typography>}


      <Button variant="contained" href="/">Volver</Button>
    </Box>
  )
}