import React from 'react'
import useSokoban from '../uses/useSokoban'

export default function SokobanStats() {
  const { movements, gameCompleted } = useSokoban()

  return (
    <div className="flex flex-grow-0 flex-col text-center">
      <span className="mt-2 text-2xl font-bold">{movements}</span>
      <span className="my-2 h-[36px] text-3xl font-bold">
        {gameCompleted && 'Nivel Superado'}
      </span>
    </div>
  )
}
