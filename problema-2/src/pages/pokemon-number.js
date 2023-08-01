/**
 * Se encarga de mostrar el numero del pokemon dado su nombre
 * @param {string} name - Nombre del pokemon
 */

import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function PokemonNumber() {
  
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(false);
    },[]);
  
    const getNumber = async (e) => {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(`/api/pokemon/name/${name}`);
      if (response.status !== 200) {
        setLoading(false);
        return setNumber('No se encontraron pokemones con ese nombre');
      }
      const data = await response.json();
      setNumber(data);
      setLoading(false);
    };
  
    if (loading) return (<p>Cargando...</p>)
  
    return (
      <Box sx={{m: 5, p: 5}}>
        <Typography variant="h5" component="div" gutterBottom>
          Número de pokemon
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Ingrese el nombre del pokemon para obtener su numero
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
          onSubmit={getNumber}
        >
          <TextField id="name" label="Nombre del pokemon" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
          <Button type="submit">Buscar</Button>
        </Box>
      
        <Typography variant="h6" component='p' sx={{mb: 2}}>Número del pokemon: {number}</Typography>


        <Button variant="contained" href="/">Volver</Button>
      </Box>
    );
}