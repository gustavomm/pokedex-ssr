import { Pokemon } from "../../domain/Pokemon";
import fetchPokemon from "../api/fetchPokemon";

type PropType = {
  pokemonList: Pokemon[];
};

export default function Pokedex({ pokemonList }: PropType) {
  return (
    <div>
      {pokemonList &&
        pokemonList.map((pokemon) => (
          <div key={pokemon.id}>{pokemon.name}</div>
        ))}
    </div>
  );
}
