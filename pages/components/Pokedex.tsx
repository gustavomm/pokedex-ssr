import Image from "next/image";
import { Pokemon } from "../../domain/Pokemon";

type PropType = {
  pokemonList: Pokemon[];
};

export default function Pokedex({ pokemonList }: PropType) {
  console.log(pokemonList);
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-3 lg:px-40 xl:px-56 md:px-20 px-4 col">
      {pokemonList &&
        pokemonList.map((pokemon) => (
          <div key={pokemon.id} className="flex flex-col mx-auto max-w-[250px]">
            <Image
              src={
                pokemon.sprites[0].sprites.other["official-artwork"]
                  .front_default
              }
              alt={pokemon.name}
              width={250}
              height={250}
              className="rounded-lg object-contain dark:bg-slate-800 bg-slate-200 max-w-[250px] transition-colors duration-500"
            ></Image>

            <div className="p-2 flex flex-col">
              <span className="text-xs text-slate-500">{`#${(
                "000" + pokemon.id
              ).slice(-3)}`}</span>

              <span className="capitalize text-xl font-extralight">
                {pokemon.name}
              </span>

              <div className="flex gap-1 mt-1">
                {pokemon.types.map((type) => (
                  <div
                    key={type.type_id}
                    className={`rounded-md ${type.type.name} w-16 text-center text-xs capitalize`}
                  >
                    {type.type.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
