import React from 'react'
import useSokoban from '../uses/useSokoban'

export default function SokobanStats() {

  const { movements, hasWin } = useSokoban()

  return (
    <div className="flex-grow-0 flex flex-col text-center">
      <span className='font-bold text-2xl mt-2'>{movements}</span>
      <span className='font-bold text-3xl my-2 h-[36px]'>{ hasWin && 'Nivel Superado' }</span>
    </div>
  )
}
