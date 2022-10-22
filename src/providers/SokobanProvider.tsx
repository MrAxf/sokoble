import { ReactNode, createContext, useEffect, useState } from 'react'

interface SokobanProviderProps {
  children: ReactNode
  board: SokobanBoard
}

interface Box extends Point {
  inButton: boolean
}

interface SokobanProviderState {
  player: Point
  boxes: { [key: number]: Box }
  meta: {
    size: number
    squarePercent: number
    walls: Record<'top' | 'bottom' | 'left' | 'right', number>
  }
  undoStack: {
    player: SokobanProviderState['player']
    box?: [ number, Box ]
  }[]
}

interface SokobanContextValue extends SokobanProviderState {
  board: SokobanBoard
  setPlayer: React.Dispatch<SokobanProviderState['player']>
  setBoxes: React.Dispatch<SokobanProviderState['boxes']>
  setMeta: React.Dispatch<SokobanProviderState['meta']>
  setUndoStack: React.Dispatch<SokobanProviderState['undoStack']>
}

const defaultContextValues = {
  board: { board: [], boxes: [], player: { x: 0, y: 0 } },
  player: { x: 0, y: 0 },
  boxes: {},
  meta: {
    size: 0,
    walls: { top: 0, bottom: 0, left: 0, right: 0 },
    squarePercent: 0,
  },
  undoStack: [],
  setPlayer: () => {},
  setBoxes: () => {},
  setMeta: () => {},
  setUndoStack: () => {},
}

export const SokobanContext = createContext<SokobanContextValue>({
  ...defaultContextValues,
})

export const SokobanProvider = ({ children, board }: SokobanProviderProps) => {
  const [ready, setReady] = useState(false)
  const [player, setPlayer] = useState<SokobanProviderState['player']>(
    defaultContextValues.player
  )
  const [boxes, setBoxes] = useState<SokobanProviderState['boxes']>(
    defaultContextValues.boxes
  )
  const [meta, setMeta] = useState<SokobanProviderState['meta']>(
    defaultContextValues.meta
  )
  const [undoStack, setUndoStack] = useState<SokobanProviderState['undoStack']>(
    []
  )

  useEffect(() => {
    const size = Math.max(board.board.length, board.board[0]?.length)

    const halfYWalls = (size - board.board.length) / 2
    const halfXWalls = (size - board.board[0].length) / 2

    const walls = {
      top: 1 + Math.floor(halfYWalls),
      bottom: 1 + Math.ceil(halfYWalls),
      left: 1 + Math.floor(halfXWalls),
      right: 1 + Math.ceil(halfXWalls),
    }

    setPlayer({ ...board.player })
    setBoxes(
      board.boxes.reduce((prev, current, index) => {
        return {
          ...prev,
          [index]: { ...current, inButton: board.board[current.y]?.[current.x] === "BUTTON" },
        }
      }, {})
    )
    setMeta({
      size,
      squarePercent: 100 / (size + 2),
      walls,
    })
    setReady(true)
    return () => {
      setReady(false)
    }
  }, [board])

  return (
    <SokobanContext.Provider
      value={{
        board,
        player,
        boxes,
        meta,
        undoStack,
        setPlayer,
        setBoxes,
        setMeta,
        setUndoStack,
      }}
    >
      {ready && children}
    </SokobanContext.Provider>
  )
}
