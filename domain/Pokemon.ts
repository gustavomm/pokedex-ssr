export interface Ability {
  ability_id: number;
  ability: {
    generation_id: number;
    name: string;
    ability_effect_texts: {
      effect: string;
      language_id: number;
    };
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat_id: number;
  stat: {
    name: string;
  };
}

export interface PokemonType {
  type_id: number;
  type: {
    name: string;
  };
}

export interface Pokemon {
  base_experience: number;
  height: number;
  id: number;
  name: string;
  abilities: Ability[];
  sprites: {
    sprites: any;
  }[];
  stats: Stat[];
  types: PokemonType[];
  weight: number;
}
