import React from 'react'
import useSokoban from '../uses/useSokoban'

export default function SokobanStats() {

  const { movements, hasWin } = useSokoban()

  return (
    <div className="flex-grow text-white">
      <span>Movimientos: {movements}</span>
      { hasWin && <span>Completado!!!</span> }
    </div>
  )
}
