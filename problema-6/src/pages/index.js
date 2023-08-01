import { Box, Button, TextField, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  
  const [pokemon, setPokemon] = useState(null);
  const [pokeSearch, setPokeSearch] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (pokeSearch === '') return setPokemon(null);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`);
    if (res.ok) {
      const data = await res.json();
      setPokemon(data);
    } else setPokemon(null);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>Encontra tu Pokémon</Typography>
          <Box 
            component="form"
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit}
            display='flex'
            justifyContent='center'
            flexDirection='row'
            alignItems='center'

          >
            <TextField sx={{ display: 'flex', justifyContent: 'center' }} id="outlined-basic" label="Número o Nombre" variant="outlined" onChange={(e) => setPokeSearch(e.target.value)} size='small'/>
            <Button type="submit" sx={{ display: 'flex', justifyContent: 'center', ml: 1 }} variant="contained" size='small'>
              Buscar
            </Button>
          </Box>
        </Box>

        {pokemon && (
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} width={150} height={150}/>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} >
              <Typography variant='h6'>Nombre: {pokemon.name}</Typography>
              <Typography variant='subtitle2'>Número: {pokemon.id}</Typography>
              <Typography variant='subtitle2'>Tipo/s:
                {pokemon.types.map((type, index) => {
                  return (
                    <span key={index}> {type.type.name} </span>
                  )
                })}
              </Typography>
              <Typography variant='subtitle2'>Peso: {pokemon.weight}</Typography>
              <Typography variant='subtitle2'>Altura: {pokemon.height}</Typography>
            </Box>
          </Box>
        )}
      </main>
    </>
  )
}
