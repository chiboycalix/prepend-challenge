export async function getAllPokemonData(page: number) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 16}&limit=16`
  );
  const data = await pokemon.json();

  const { results, ...rest } = data;
  const allPokemon = results.map(async function (e: {
    name: string;
    url: string;
  }) {
    const response = await getOnePokemonData(e.name);
    return {
      ...e,
      pokemonImg: response.sprites.back_default,
      id: response.id,
    };
  });

  const result = await Promise.all(allPokemon);

  const obj = {
    ...rest,
    result,
  };
  return obj;
}

export async function getOnePokemonData(name: string) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return pokemon.json();
}
