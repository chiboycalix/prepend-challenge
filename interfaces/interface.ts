
export interface IPokemon {
  pokemon: {
    id: number;
    base_experience: number;
    name: string;
    url: string;
    pokemonImg: string;
    sprites: { back_default: string };
    species: { name: string; url: string };
    weight: number;
    stats: IStats[];
    moves: IMove[];
    types: ITypes[];
  };
}

export interface IMove {
   move: { name: string; url: string };
}
export interface ITypes {
  type: { name: string; url: string };
}
export interface IStats {
  base_stat: number;
  effort: number;
}
