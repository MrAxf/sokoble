import { useCallback } from 'react'
import { useRecoilValue } from 'recoil'

import { SokobanProvider } from '../providers/SokobanProvider'
import sokobanBoard, { sokobanMeta } from '../store/sokobanBoard'
import Player from './Player'
import SokobanGrid from './SokobanGrid'

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
      <SokobanGrid>
        <Player />
      </SokobanGrid>
    </SokobanProvider>
  )
}
