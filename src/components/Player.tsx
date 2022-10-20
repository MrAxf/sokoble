import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import sokobanBoard, { sokobanMeta } from '../store/sokobanBoard'
import sokobanPlayer from '../store/sokoblePlayer'

export default function Player() {
  const meta = useRecoilValue(sokobanMeta)
  const board = useRecoilValue(sokobanBoard)
  const [player, setPlayer] = useRecoilState(sokobanPlayer)

  useEffect(() => {
    const onKeyDown = (evt: KeyboardEvent) => {
      const next = { ...player }
      switch (evt.key) {
        case 'ArrowUp':
          next.y = next.y - 1
          break
        case 'ArrowDown':
          next.y = next.y + 1
          break
        case 'ArrowLeft':
          next.x = next.x - 1
          break
        case 'ArrowRight':
          next.x = next.x + 1
          break
        default:
          break
      }
      const nextCell = board.board[next.y][next.x]
      if (nextCell && nextCell !== 'BLOCK') setPlayer(next)
    }
    globalThis.document.addEventListener('keydown', onKeyDown)

    return () => {
      globalThis.document.removeEventListener('keydown', onKeyDown)
    }
  }, [board, player])

  return (
    <motion.div
      className="absolute aspect-square rounded-full bg-yellow-600"
      style={{ width: `${meta.squarePercent}%` }}
      animate={{
        left: `${(meta.walls.left + player.x) * meta.squarePercent}%`,
        top: `${(meta.walls.top + player.y) * meta.squarePercent}%`,
      }}
    ></motion.div>
  )
}
