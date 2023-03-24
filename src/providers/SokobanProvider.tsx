import {
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useRecoilState } from 'recoil'
import { setConfettiEnabled } from '../components/Confetti'

import {
  currentGameBoxes,
  currentGameName,
  currentGamePlayer,
  currentGameUndos,
} from '../store/currentGame'
import { gamesCompleted, gamesPlayed } from '../store/gameStats'

interface SokobanProviderProps {
  children: ReactNode
  board: SokobanBoard
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
    box?: [number, Box]
  }[]
}

interface SokobanContextValue extends SokobanProviderState {
  board: SokobanBoard
  setPlayer: React.Dispatch<SokobanProviderState['player']>
  setBoxes: React.Dispatch<SokobanProviderState['boxes']>
  setMeta: React.Dispatch<SokobanProviderState['meta']>
  setUndoStack: React.Dispatch<SokobanProviderState['undoStack']>
  gameCompleted: boolean
}

const defaultContextValues = {
  board: { name: '', board: [], boxes: [], player: { x: 0, y: 0 } },
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
  gameCompleted: false,
}

export const SokobanContext = createContext<SokobanContextValue>({
  ...defaultContextValues,
})

export const SokobanProvider = ({ children, board }: SokobanProviderProps) => {
  const [ready, setReady] = useState(false)
  const [gameName, setGameName] = useRecoilState(currentGameName)
  const [player, setPlayer] = useRecoilState(currentGamePlayer)
  const [boxes, setBoxes] = useRecoilState(currentGameBoxes)
  const [undoStack, setUndoStack] = useRecoilState(currentGameUndos)
  const [meta, setMeta] = useState<SokobanProviderState['meta']>(
    defaultContextValues.meta
  )
  const [, setGamesPlayed] = useRecoilState(gamesPlayed)
  const [, setGamesCompleted] = useRecoilState(gamesCompleted)

  const gameCompleted = useMemo(() => {
    const boxesArr = Object.entries(boxes)
    return (
      boxesArr.length !== 0 &&
      boxesArr.every(([,box]) => box.inButton)
    )
  }, [boxes])
  const prevGameCompleted = useRef(gameCompleted)

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

    setMeta({
      size,
      squarePercent: 100 / (size + 2),
      walls,
    })

    if (board.name !== gameName) {
      setGamesPlayed((prev) => prev + 1)
      setGameName(board.name)
      setPlayer({ ...board.player })
      setBoxes(
        board.boxes.reduce((prev, current, index) => {
          return {
            ...prev,
            [index]: {
              ...current,
              inButton: board.board[current.y]?.[current.x] === 'BUTTON',
            },
          }
        }, {})
      )
      setUndoStack([])
    }
    setReady(true)
    return () => {
      setReady(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board])

  useEffect(() => {
    setConfettiEnabled(gameCompleted)
    if (gameCompleted && prevGameCompleted.current !== gameCompleted) {
      setGamesCompleted((prev) => prev + 1)
    }
    prevGameCompleted.current = gameCompleted
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameCompleted])

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
        gameCompleted,
      }}
    >
      {ready && children}
    </SokobanContext.Provider>
  )
}
