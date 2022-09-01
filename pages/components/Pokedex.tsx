import Image from "next/image";
import { Pokemon } from "../../domain/Pokemon";

type PropType = {
  pokemonList: Pokemon[];
};

export default function Pokedex({ pokemonList }: PropType) {
  console.log(pokemonList);
  return (
    <div className="flex flex-col gap-2">
      {pokemonList &&
        pokemonList.map((pokemon) => (
          <div key={pokemon.id} className="flex">
            <Image
              src={
                pokemon.sprites[0].sprites.other["official-artwork"]
                  .front_default
              }
              alt={pokemon.name}
              width={250}
              height={250}
              className="dark:bg-slate-700 rounded-lg"
            ></Image>
            <div className="py-2 flex w-full">
              <div className="dark: bg-slate-800 rounded-r-lg p-4 flex w-full shadow-xsm">
                <span className="capitalize text-2xl">{pokemon.name}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
