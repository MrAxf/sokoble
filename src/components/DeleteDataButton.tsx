import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useRecoilState } from 'recoil'

import {
  currentGameBoxes,
  currentGameName,
  currentGamePlayer,
  currentGameUndos,
} from '../store/currentGame'
import { gamesCompleted, gamesPlayed } from '../store/gameStats'
import HoldButton from './HoldButton'

export default function DeleteDataButton() {
  const [, setGameName] = useRecoilState(currentGameName)
  const [, setGamePlayer] = useRecoilState(currentGamePlayer)
  const [, setGameBoxes] = useRecoilState(currentGameBoxes)
  const [, setGameUndos] = useRecoilState(currentGameUndos)
  const [, setGamesPlayed] = useRecoilState(gamesPlayed)
  const [, setGamesCompleted] = useRecoilState(gamesCompleted)

  const onHoldEnded = () => {
    setGameName('')
    setGamePlayer({ x: 0, y: 0 })
    setGameBoxes({})
    setGameUndos([])
    setGamesPlayed(0)
    setGamesCompleted(0)
  }

  return (
    <HoldButton
      className="p-3 my-6 flex flex-row"
      onHoldEnded={onHoldEnded}
      holdTime={5000}
      theme="danger"
    >
      <MdDelete className="inline-block w-[1.5em] h-[1.5em]" /> Eliminar datos
    </HoldButton>
  )
}
