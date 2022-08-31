import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Pokemon } from "../domain/Pokemon";
import styles from "../styles/Home.module.css";
import fetchPokemon from "./api/fetchPokemon";
import Pokedex from "./components/Pokedex";

type HomeProps = {
  pokemonList: Pokemon[];
};

const Home: NextPage<HomeProps> = ({ pokemonList }) => {
  return (
    <div className={styles.container}>
      <Pokedex pokemonList={pokemonList}></Pokedex>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      pokemonList: await fetchPokemon(1200, 0),
    },
    revalidate: 6000,
  };
};

export default Home;
