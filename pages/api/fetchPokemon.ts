import { gql } from "@apollo/client";
import { Pokemon } from "../../domain/Pokemon";
import client from "../../apollo-client";

export default async function fetchPokemon(
  limit: number,
  offset: number
): Promise<Pokemon[]> {
  const POKEMON_QUERY = gql`query MyQuery {
    pokemon: pokemon_v2_pokemon(limit: ${limit}, offset: ${offset}) {
      id
      name
      sprites: pokemon_v2_pokemonsprites {
        sprites
      }
      types: pokemon_v2_pokemontypes {
        type_id
        type: pokemon_v2_type {
          name
        }
      }
    }
  }`;

  const { data } = await client.query({ query: POKEMON_QUERY });
  return data.pokemon
    .map((pokemon: Pokemon) => {
      const sprites = pokemon.sprites.map((sprites) => {
        const parsedSprites = JSON.parse(sprites.sprites as string);
        return { sprites: parsedSprites };
      });
      if (sprites[0].sprites.other["official-artwork"].front_default) {
        return { ...pokemon, sprites };
      }
    })
    .filter((pokemon: Pokemon) => pokemon !== undefined);
}

export async function fetchPokemonById(id: string | string[] | undefined) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return await response.json();
}
