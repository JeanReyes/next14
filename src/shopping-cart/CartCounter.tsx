'use client'

import React, { useState } from 'react'

interface Props {
  value?: number
}

export const CartCounter = ({value = 0}: Props) => {
  const [state, setState] = useState(value);

  return (
    <>
      <span className="text-9xl">{state}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setState(state + 1)}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setState(state + 1)}
        >
          -1
        </button>
      </div>
    </>
  )
}
