import React from 'react';
import { PokemonGrid } from '../../../pokemons/components/PokemonGrid';

export default function HomeFavorite() {
 
  return (
    <div className="flex flex-col">
      <span className="text-sm md:text-5xl my-2">
        Listado de Pokémons <small className="text-blue-500">favoritos</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
