import { ReactNode, useCallback } from 'react'

import useSokoban from '../uses/useSokoban'
import Box from './Box'
import Player from './Player'

export default function SokobanGrid() {
  const { meta, board, boxes } = useSokoban()

  const renderCell = (cell: SokobanCell, key: string) =>
    ({
      BLOCK: <div key={key} className="bg-transparent aspect-square"></div>,
      FREE: <div key={key} className="bg-primary-light aspect-square"></div>,
      BUTTON: (
        <div
          key={key}
          className="bg-primary-light aspect-square after:content-[''] after:bg-white after:rounded-full after:m-[25%] after:block after:w-1/2 after:h-1/2"
        ></div>
      ),
    }[cell])

  const renderBoard = useCallback(() => {
    if (!meta.size) return null
    let index = 0

    return [
      ...Array(meta.walls.top * (meta.size + 2))
        .fill('')
        .map(() => renderCell('BLOCK', String(index++))),

      ...board.board
        .map((row) => [
          ...Array(meta.walls.left)
            .fill('')
            .map(() => renderCell('BLOCK', String(index++))),
          ...row.map((item) => renderCell(item, String(index++))),
          ...Array(meta.walls.right)
            .fill('')
            .map(() => renderCell('BLOCK', String(index++))),
        ])
        .flat(),

      ...Array(meta.walls.bottom * (meta.size + 2))
        .fill('')
        .map(() => renderCell('BLOCK', String(index++))),
    ]
  }, [meta])

  return (
    <div
      role="grid"
      className="bg-gradient-to-br from-primary-dark to-secondary-dark grid w-full flex-grow-0 aspect-square rounded-xl border-8 border-primary-main max-w-full max-h-full relative overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(${(meta.size || 0) + 2}, 1fr)`,
      }}
    >
      {renderBoard()}
      <Player />
      {Object.entries(boxes).map(([id, box]) => (
        <Box key={id} {...box} />
      ))}
    </div>
  )
}
