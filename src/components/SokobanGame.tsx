import { useRef } from 'react'

type SokobanBoardProps = {
  board: SokobanBoard
}

export default function SokobanGame({ board }: SokobanBoardProps) {
  const size = useRef(Math.max(board.board.length, board.board[0]?.length))

  const renderCell = (cell: SokobanCell) =>
    ({
      BLOCK: <div className="bg-purple-900 aspect-square"></div>,
      FREE: <div className="bg-purple-300 aspect-square"></div>,
      BUTTON: <div className="bg-purple-50 aspect-square"></div>,
    }[cell])

  const renderBoard = () => {
    const halfYWalls = (size.current - board.board.length) / 2
    const halfXWalls = (size.current - board.board[0].length) / 2

    return [
      Array((1 + Math.floor(halfYWalls)) * (size.current + 2))
        .fill('')
        .map(() => renderCell('BLOCK')),
      board.board.map((row) => [
        Array(1 + Math.floor(halfXWalls))
          .fill('')
          .map(() => renderCell('BLOCK')),
        row.map((item) => renderCell(item)),
        Array(1 + Math.ceil(halfXWalls))
          .fill('')
          .map(() => renderCell('BLOCK')),
      ]),
      Array((1 + Math.ceil(halfYWalls)) * (size.current + 2))
        .fill('')
        .map(() => renderCell('BLOCK')),
    ]
  }

  return (
    <div
      role="grid"
      className="grid w-full aspect-square rounded-xl border-4 border-violet-600 max-w-full max-h-full"
      style={{
        gridTemplateColumns: `repeat(${size.current + 2}, 1fr)`,
      }}
    >
      {renderBoard()}
    </div>
  )
}
