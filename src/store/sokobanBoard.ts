import { atom, selector } from 'recoil'

const sokobanBoard = atom<SokobanBoard>({
  key: 'sokobanBoard',
  default: {
    board: [
      ['BLOCK', 'FREE', "FREE", "FREE", "FREE", "FREE", "BLOCK"],
      ['BLOCK', 'FREE', "FREE", "FREE", "FREE", "FREE", "BLOCK"],
      ['BLOCK', 'FREE', "FREE", "FREE", "FREE", "FREE", "BLOCK"],
      ['BLOCK', 'FREE', "FREE", "FREE", "FREE", "FREE", "BLOCK"],
      ['BLOCK', 'FREE', "FREE", "FREE", "FREE", "FREE", "BLOCK"],
      ['BLOCK', 'FREE', "FREE", "FREE", "FREE", "FREE", "BLOCK"],
      ['BLOCK', 'FREE', "FREE", "FREE", "FREE", "FREE", "BLOCK"],
    ],
    player: { x: 1, y: 0 },
    boxes: [{ x: 3, y: 3 }, { x: 3, y: 4 }],
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
