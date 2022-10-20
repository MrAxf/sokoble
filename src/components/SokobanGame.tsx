import { useCallback } from 'react'
import { useRecoilValue } from 'recoil'

import { SokobanProvider } from '../providers/SokobanProvider'
import sokobanBoard, { sokobanMeta } from '../store/sokobanBoard'
import Player from './Player'

export default function SokobanGame() {
  const board = useRecoilValue(sokobanBoard)

  const renderCell = (cell: SokobanCell, key: string) =>
    ({
      BLOCK: <div key={key} className="bg-purple-900 aspect-square"></div>,
      FREE: <div key={key} className="bg-purple-300 aspect-square"></div>,
      BUTTON: <div key={key} className="bg-purple-50 aspect-square"></div>,
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
  }, [board])

  return (
    <SokobanProvider board={board}>
      <div
        role="grid"
        className="grid w-full aspect-square rounded-xl border-4 border-violet-600 max-w-full max-h-full relative overflow-hidden"
        style={{
          gridTemplateColumns: `repeat(${(meta.size || 0) + 2}, 1fr)`,
        }}
      >
        {renderBoard()}
        <Player />
      </div>
    </SokobanProvider>
  )
}
