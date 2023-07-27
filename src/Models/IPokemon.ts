export interface IPokemon {
    data: IPokemonList;
}

export interface IPokemonList {
    pokemon_v2_item: IPokemonv2item[];
}

export interface IPokemonv2item {
    name: string;
    cost: number;
}