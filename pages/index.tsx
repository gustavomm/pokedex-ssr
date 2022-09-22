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
    <div className="dark">
      <div className={"dark:bg-gray-900 dark:text-gray-200"}>
        <Head>
          <title>Pokedex</title>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <div className="pl-12 font-extralight flex items-center gap-2 w-full mb-3 sticky bg-transparent transition-colors duration-500 z-40 top-0 backdrop-blur p-5 border-slate-50 border-opacity-5 border-b">
          <Image
            src="/pokeball.png"
            alt="pokeball"
            width={30}
            height={30}
          ></Image>
          <span>Pokedex</span>
        </div>
        <Pokedex pokemonList={pokemonList}></Pokedex>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      pokemonList: await fetchPokemon(1200, 0),
    },
  };
};

export default Home;
