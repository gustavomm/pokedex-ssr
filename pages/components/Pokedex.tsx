import Image from "next/image";
import { Pokemon } from "../../domain/Pokemon";

type PropType = {
  pokemonList: Pokemon[];
};

export default function Pokedex({ pokemonList }: PropType) {
  console.log(pokemonList);
  return (
    <div className="grid grid-cols-4 gap-3 px-60">
      {pokemonList &&
        pokemonList.map((pokemon) => (
          <div key={pokemon.id} className="flex flex-col mb-3">
            <Image
              src={
                pokemon.sprites[0].sprites.other["official-artwork"]
                  .front_default
              }
              alt={pokemon.name}
              width={250}
              height={250}
              className="rounded-lg max-w bg-slate-800"
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
