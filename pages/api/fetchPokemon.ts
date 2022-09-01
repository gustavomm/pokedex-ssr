import { gql } from "@apollo/client";
import { Pokemon } from "../../domain/Pokemon";
import client from "../../apollo-client";

export default async function fetchPokemon(
  limit: number,
  offset: number
): Promise<Pokemon[]> {
  const POKEMON_QUERY = gql`query MyQuery {
    pokemon: pokemon_v2_pokemon(limit: ${limit}, offset: ${offset}) {
      base_experience
      height
      id
      name
      abilites: pokemon_v2_pokemonabilities {
        ability_id
        ability: pokemon_v2_ability {
          generation_id
          name
          ability_effect_texts: pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}) {
            effect
            language_id
          }
        }
      }
      sprites: pokemon_v2_pokemonsprites {
        sprites
      }
      stats: pokemon_v2_pokemonstats {
        base_stat
        effort
        stat_id
        stat: pokemon_v2_stat {
          name
        }
      }
      types: pokemon_v2_pokemontypes {
        type_id
        type: pokemon_v2_type {
          name
        }
      }
      weight
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
