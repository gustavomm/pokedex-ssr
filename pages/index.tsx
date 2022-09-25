import { useState } from "react";
import { Pokemon } from "../domain/Pokemon";
import fetchPokemon from "./api/fetchPokemon";
import Pokedex from "../components/Pokedex";
import { NextPageWithLayout } from "./_app";

type HomeProps = {
  pokemonList: Pokemon[];
};

const Home: NextPageWithLayout<HomeProps> = ({ pokemonList }) => {
  const [uiMode, setUiMode] = useState("dark");

  const switchMode = () => {
    uiMode === "dark" ? setUiMode("light") : setUiMode("dark");
  };

  return <Pokedex pokemonList={pokemonList}></Pokedex>;
};

export const getStaticProps = async () => {
  return {
    props: {
      pokemonList: await fetchPokemon(1200, 0),
    },
  };
};

export default Home;
