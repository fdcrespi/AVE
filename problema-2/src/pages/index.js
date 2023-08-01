import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>Bienvenido a la consulta de Pokemon</h1>
        <div className={styles.grid}>
          <Link href={`type-quantity`} className={styles.card}>
            <h2>Cantidad por tipo &rarr;</h2>
            <p>Cantidad de pokemones por tipo</p>
          </Link>
          <Link href={'pokemon-types'} className={styles.card}>
            <h2>Pokemon con 2 tipos &rarr;</h2>
            <p>Dado 2 tipos, devuelve los pokemon que cumplen con estos</p>
          </Link>
          <Link href="pokemon-number" className={styles.card}>
            <h2>Número de pokemon &rarr;</h2>
            <p>Dado un nombre, devuelve el numero del mismo</p>
          </Link>
          <Link href="pokemon-stats" className={styles.card}>
            <h2>Stats de pokemon &rarr;</h2>
            <p>Dado un numero, devuelve los stats del mismo</p>
          </Link>
          <Link href="pokemon-order" className={styles.card}>
            <h2>Pokemones ordenados &rarr;</h2>
            <p>Dado un orden y un arreglo de ids, devuelve los pokemones ordenados</p>
          </Link>
          <Link href="number-type" className={styles.card}>
            <h2>Tipo de pokemon por id &rarr;</h2>
            <p>Dado un numero y un tipo, devuelve si el pokemon tiene ese tipo</p>
          </Link>
        </div>

      </main>
    </>
  )
}
