import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { json } from "stream/consumers";
import { PokemonDetails } from "../../domain/Pokemon";
import { fetchPokemonById } from "../api/fetchPokemon";

type PokemonDetailsProps = {
  pokemon: PokemonDetails;
};

const PokemonDetails: NextPage<PokemonDetailsProps> = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className="flex flex-col gap-3 px-10 py-5 items-center md:items-baseline md:h-screen">
      <div className="flex flex-col md:flex-row gap-6 self-center">
        <Image
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          width={500}
          height={500}
          className="rounded-lg object-contain dark:bg-slate-800 bg-slate-200 transition-colors duration-500 max-w-[400px]"
          layout="intrinsic"
        ></Image>
        <div className="flex flex-col">
          <span className="text-base text-slate-500">{`#${(
            "000" + pokemon.id
          ).slice(-3)}`}</span>
          <span className="capitalize text-3xl font-extralight">
            {pokemon.name}
          </span>
          <div className="flex gap-2 mt-1 mb-6">
            {pokemon.types.map((type) => (
              <div
                key={type.type_id}
                className={`rounded-md ${type.type.name} w-20 text-center text-base capitalize`}
              >
                {type.type.name}
              </div>
            ))}
          </div>
          <div className="grid cols-3 md:grid-cols-3 gap-3 md:gap-8 p-5 dark:bg-slate-800 bg-slate-200 transition-color duration-500 rounded-lg mb-6">
            <div className="flex flex-col">
              <span className="text-slate-500">Heigth</span>
              <span className="text-xl font-light">{`${
                pokemon.height / 10
              }m`}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500">Weigth</span>
              <span className="text-xl font-light">{`${
                pokemon.weight / 10
              }kg`}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500">Abilities</span>
              {pokemon.abilities.map((ability) => {
                return (
                  <span
                    className="text-xl font-light capitalize"
                    key={ability.slot}
                  >
                    {ability.ability.name}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex flex-row p-5 dark:bg-slate-800 bg-slate-200 transition-color duration-500 rounded-lg gap-3 w-full">
            <table className="w-full">
              <tbody>
                {pokemon.stats.map((stat) => {
                  return (
                    <tr key={stat.stat_id}>
                      <td className="text-lg font-light capitalize pr-2 align-middle w-28">{`${
                        stat.stat.name === "special-attack"
                          ? "Sp.Atk"
                          : stat.stat.name === "special-defense"
                          ? "Sp.Def"
                          : stat.stat.name
                      }: ${stat.base_stat}`}</td>
                      <td className="align-middle">
                        <div className=" bg-gray-400 rounded-full h-2.5 dark:bg-gray-700">
                          <div
                            className="bg-emerald-600 h-2.5 rounded-full dark:bg-emerald-500"
                            style={{ width: stat.base_stat / 2 + "%" }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      pokemon: await fetchPokemonById(context?.params?.id),
    },
  };
};

export default PokemonDetails;
