/**
 * Muestra si el numero dado de pokemon posee o no un tipo determinado 
 * @param {string} id - Numero del pokemon
 * @param {string} type - Tipo del pokemon
 */

import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function PokemonType() {
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const getType = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`/api/pokemon/id/${id}`);
    if (response.status !== 200) {
      setLoading(false);
      return setMessage('No se encontraron pokemones con ese numero');
    }
    const data = await response.json();
    if (data.length === 0) {
      setLoading(false);
      return setMessage('No se encontraron pokemones con ese numero');
    }
    setMessage('');
    setLoading(false);
    setPokemon(data);
  };

  if (loading) return (<p>Cargando...</p>)

  return (
    <Box sx={{m: 5, p: 5}}>
      <Typography variant="h5" component="div" gutterBottom>
        Tipo de pokemon
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        Ingrese el numero del pokemon y el tipo que quiere buscar
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
        onSubmit={getType}
      >
        <TextField id="id" label="Número del pokemon" variant="standard" value={id} onChange={(e) => setId(e.target.value)} />
        <TextField id="type" label="Tipo de pokemon" variant="standard" value={type} onChange={(e) => setType(e.target.value)} />
        <Button type="submit">Buscar</Button>
      </Box>

      { message && <Typography variant="h6" component="div" gutterBottom>{message}</Typography> }

      {
        pokemon && (pokemon.types.filter((t) => t.type.name === type).length > 0 ? 
        <Typography variant="h6" component="div" gutterBottom>El pokemon con numero {id} SI es de tipo {type}</Typography> :
        <Typography variant="h6" component="div" gutterBottom>El pokemon con numero {id} NO es de tipo {type}</Typography> )
      }

      <Button variant="contained" href="/">Volver</Button>
    </Box>
  )
}