import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { json } from "stream/consumers";
import { PokemonDetails } from "../../domain/Pokemon";
import { fetchPokemonById } from "../api/fetchPokemon";

type PokemonDetailsProps = {
  pokemon: PokemonDetails;
};

const PokemonDetails: NextPage<PokemonDetailsProps> = ({ pokemon }) => {
  return <div className="">{JSON.stringify(pokemon)}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      pokemon: await fetchPokemonById(context?.params?.id),
    },
  };
};

export default PokemonDetails;
