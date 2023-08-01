/**
 * Se encarga de mostrar los 6 stats base de un pokemon dado su numero
 * @param {string} id - Numero del pokemon
 */

import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function PokemonStats() {
  
    const [id, setId] = useState('');
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      setLoading(false);
    },[]);
  
    const getStats = async (e) => {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(`/api/pokemon/stats/${id}`);
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
      setStats(data);
      setLoading(false);
    };
  
    if (loading) return (<p>Cargando...</p>)
  
    return (
      <Box sx={{m: 5, p: 5}}>
        <Typography variant="h5" component="div" gutterBottom>
          Stats de pokemon
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Ingrese el numero del pokemon para obtener sus stats
        </Typography>
        <Box 
          component='form'
          sx={{
            '& > :not(style)': { m: 1 },
            mb: 2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',

          }}
          noValidate
          autoComplete="off"
          onSubmit={getStats}

        >
          <TextField id="id" label="Numero del pokemon" variant="outlined" value={id} onChange={(e) => setId(e.target.value)} size="small"/>
          <Button type="submit" variant="contained">Buscar</Button>
        </Box>
  
        {message && <Typography variant="h6" component="div" gutterBottom>{message}</Typography>}
  
        {stats.map((stat) => (
          <Typography variant="h6" component="div" gutterBottom>
            {stat.name}: {stat.value}
          </Typography>
        ))}
  
        <Button variant="contained" href="/">Volver</Button>
      </Box>
    );
  }