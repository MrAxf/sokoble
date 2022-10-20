import { ReactNode, createContext, useEffect, useState } from 'react'

import sokobanBoard from '../store/sokobanBoard'

interface SokobanProviderProps {
  children: ReactNode
  board: SokobanBoard
}

interface SokobanProviderState {
  player?: Point
  boxes?: { [key: number]: Point }
  meta?: {
    size: number
    squarePercent: number
    walls: Record<'top' | 'bottom' | 'left' | 'right', number>
  }
}

interface SokobanContextValue extends SokobanProviderState {
  board: SokobanBoard
  setPlayer: React.Dispatch<SokobanProviderState['player']>
  setBoxes: React.Dispatch<SokobanProviderState['boxes']>
  setMeta: React.Dispatch<SokobanProviderState['meta']>
}

export const SokobanContext = createContext<SokobanContextValue | null>(null)

export const SokobanProvider = ({ children, board }: SokobanProviderProps) => {
  const [player, setPlayer] = useState<SokobanProviderState['player']>()
  const [boxes, setBoxes] = useState<SokobanProviderState['boxes']>()
  const [meta, setMeta] = useState<SokobanProviderState['meta']>()

  useEffect(() => {
    setPlayer({ ...board.player })
    setBoxes(
      board.boxes.reduce((prev, current, index) => {
        return {
          ...prev,
          [index]: { ...current },
        }
      }, {})
    )

    const size = Math.max(board.board.length, board.board[0]?.length)

    const halfYWalls = (size - board.board.length) / 2
    const halfXWalls = (size - board.board[0].length) / 2

    const walls = {
      top: 1 + Math.floor(halfYWalls),
      bottom: 1 + Math.ceil(halfYWalls),
      left: 1 + Math.floor(halfXWalls),
      right: 1 + Math.ceil(halfXWalls),
    }

    setMeta({
      size,
      squarePercent: 100 / (size + 2),
      walls,
    })
  }, [sokobanBoard])

  return (
    <SokobanContext.Provider
      value={{ board, player, boxes, meta, setPlayer, setBoxes, setMeta }}
    >
      {Boolean(board) &&
        Boolean(player) &&
        Boolean(boxes) &&
        Boolean(meta) &&
        children}
    </SokobanContext.Provider>
  )
}
