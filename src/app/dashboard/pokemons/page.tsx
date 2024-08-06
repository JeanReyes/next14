import { PokemonGrid, PokemonReponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonReponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&${offset}=0`
  ).then((res) => res.json());
  
  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }));

  // throw new Error('este es un error ');

  return pokemons;
}

export default async function HomePorkemon() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-sm md:text-5xl my-2 text-blue-500">
        Listado de Pokémons <small>estático</small>
      </span>
      <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}