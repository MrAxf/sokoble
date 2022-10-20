import { atom, selector } from 'recoil'

const sokobanBoard = atom<SokobanBoard>({
  key: 'sokobanBoard',
  default: {
    board: [
      ['FREE', 'FREE', "FREE", "FREE", "FREE", "FREE", "BLOCK"],
      ['FREE', 'FREE', "FREE", "FREE", "FREE", "FREE", "FREE"],
    ],
    player: { x: 0, y: 0 },
    boxes: [{ x: 1, y: 0 }],
  }
})

export const sokobanMeta = selector({
  key: 'sokobanMeta',
  get: ({ get }) => {
    const board = get(sokobanBoard)
    const size = Math.max(board.board.length, board.board[0]?.length)

    const halfYWalls = (size - board.board.length) / 2
    const halfXWalls = (size - board.board[0].length) / 2

    const walls = {
      top: (1 + Math.floor(halfYWalls)),
      bottom: (1 + Math.ceil(halfYWalls)),
      left: 1 + Math.floor(halfXWalls),
      right: 1 + Math.ceil(halfXWalls)
    }

    return {
      size,
      squarePercent: 100 / (size + 2),
      walls
    }
  }
})

export default sokobanBoard
