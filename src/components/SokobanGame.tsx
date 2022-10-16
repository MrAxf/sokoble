import { useEffect, useRef, useState } from 'react'

type SokobanBoardProps = {
  board: SokobanBoard
}

export default function SokobanGame({ board }: SokobanBoardProps) {
  const renderCell = (cell: SokobanCell, key: string) =>
    ({
      BLOCK: <div key={key} className="bg-purple-900 aspect-square"></div>,
      FREE: <div key={key} className="bg-purple-300 aspect-square"></div>,
      BUTTON: <div key={key} className="bg-purple-50 aspect-square"></div>,
    }[cell])

  const renderBoard = () => {
    if (!size) return null
    const halfYWalls = (size - board.board.length) / 2
    const halfXWalls = (size - board.board[0].length) / 2
    let index = 0

    return [
      ...Array((1 + Math.floor(halfYWalls)) * (size + 2))
        .fill('')
        .map(() => renderCell('BLOCK', String(index++))),

      ...board.board
        .map((row) => [
          ...Array(1 + Math.floor(halfXWalls))
            .fill('')
            .map(() => renderCell('BLOCK', String(index++))),
          ...row.map((item) => renderCell(item, String(index++))),
          ...Array(1 + Math.ceil(halfXWalls))
            .fill('')
            .map(() => renderCell('BLOCK', String(index++))),
        ])
        .flat(),

      ...Array((1 + Math.ceil(halfYWalls)) * (size + 2))
        .fill('')
        .map(() => renderCell('BLOCK', String(index++))),
    ]
  }

  const [size, setSize] = useState<number | null>(null)

  useEffect(() => {
    setSize(Math.max(board.board.length, board.board[0]?.length))
  }, [board])

  return (
    <div
      role="grid"
      className="grid w-full aspect-square rounded-xl border-4 border-violet-600 max-w-full max-h-full"
      style={{
        gridTemplateColumns: `repeat(${(size || 0) + 2}, 1fr)`,
      }}
    >
      {renderBoard()}
    </div>
  )
}
