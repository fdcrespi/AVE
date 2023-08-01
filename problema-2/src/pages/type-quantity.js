/**
 * Se encarga de mostrar la cantidad de pokemones por tipo
 * @param {string} type - Tipo de pokemon
 */

import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function TypeQuantity() {

  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  },[]);

  const getQuantity = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`/api/pokemon/type/${type}`);
    if (response.status !== 200) {
      setLoading(false);
      return setQuantity('No se encontraron pokemones de ese tipo');
    }
    const data = await response.json();
    setQuantity(data);
    setLoading(false);
  };

  if (loading) return (<p>Cargando...</p>)

  return (
    <Box sx={{ p: 5, m: 5 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Cantidad de pokemones por tipo
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        Ingrese el tipo de pokemon para obtener la cantidad de pokemones de ese tipo
      </Typography>
      
      
      <Box 
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          mb: 2,
        }}
        noValidate
        autoComplete="off"
        onSubmit={getQuantity}
      >
        <TextField name="type" id="type" label="Tipo de pokemon" variant="standard" value={type} onChange={(e) => setType(e.target.value)} />
        <Button variant="contained" type="submit">Buscar</Button>
      </Box>

      <Typography variant="h5" component="h5" gutterBottom>
        Cantidad encontrados: {quantity}
      </Typography>

      <Button variant="contained" href="/">Volver</Button>
    </Box>
  );
} 