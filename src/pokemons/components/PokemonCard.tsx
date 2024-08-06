/* eslint-disable react/no-string-refs */
import Link from 'next/link';
import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon';
import Image from 'next/image';
import { IoHeartOutline } from 'react-icons/io5';

interface Props {
  pokemon: SimplePokemon
}

export const PokemonCard = ({pokemon}: Props) => {

  const { id, name } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={id}
            width={100}
            height={100}
            priority={false}
            alt="a"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
          <div className="mt-5">
            <Link href={`/dashboard/pokemon/${name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Más información
            </Link>
          </div>
        </div>

        <div className="border-b">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-red-600">
              <IoHeartOutline/>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Campaigns
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
