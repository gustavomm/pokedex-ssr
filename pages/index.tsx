import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Pokemon } from "../domain/Pokemon";
import styles from "../styles/Home.module.css";
import fetchPokemon from "./api/fetchPokemon";
import LightDarkSwitch from "./components/LightDarkSwitch";
import Pokedex from "./components/Pokedex";

type HomeProps = {
  pokemonList: Pokemon[];
};

const Home: NextPage<HomeProps> = ({ pokemonList }) => {
  const [uiMode, setUiMode] = useState("dark");

  const switchMode = () => {
    uiMode === "dark" ? setUiMode("light") : setUiMode("dark");
  };

  return (
    <div className={uiMode}>
      <div className="dark:bg-gray-900 dark:text-gray-200">
        <Head>
          <title>Pokedex</title>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
        </Head>
        <div className="pl-12 pr-12 font-extralight flex items-center justify-between gap-2 w-full mb-3 sticky bg-transparent z-40 top-0 backdrop-blur p-5 dark:border-slate-50/5 border-slate-900/5 border-b">
          <div className="flex items-center gap-3">
            <Image
              src="/pokeball.png"
              alt="pokeball"
              width={30}
              height={30}
            ></Image>
            <span>Pokedex</span>
          </div>
          <LightDarkSwitch
            callback={switchMode}
            activeType={uiMode}
          ></LightDarkSwitch>
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
