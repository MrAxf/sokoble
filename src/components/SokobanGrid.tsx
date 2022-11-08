import { Fragment, useCallback } from 'react'

import useSokoban from '../uses/useSokoban'
import tailwindData from '../utils/tailwindData'
import Box from './Box'
import Player from './Player'

export default function SokobanGrid() {
  const { meta, board, boxes } = useSokoban()

  const renderCell = (cell: SokobanCell, x: number, y: number) =>
    ({
      BLOCK: undefined,
      FREE: (
        <rect
          key={`${x}-${y}`}
          x={x + meta.walls.left}
          y={y + meta.walls.top}
          width="1"
          height="1"
          style={{
            fill: tailwindData.theme.colors["primary"].light,
            strokeWidth: 0.05,
            stroke: tailwindData.theme.colors["primary"].light,
          }}
        />
      ),
      BUTTON: (
        <Fragment key={`${x}-${y}`}>
          <rect
            x={x + meta.walls.left}
            y={y + meta.walls.top}
            width="1"
            height="1"
            style={{
              fill: tailwindData.theme.colors["primary"].light,
              strokeWidth: 0.05,
              stroke: tailwindData.theme.colors["primary"].light,
            }}
          />
          <circle
            cx={x + meta.walls.left + 0.5}
            cy={y + meta.walls.top + 0.5}
            r="0.25"
            style={{ fill: 'white' }}
          />
        </Fragment>
      ),
    }[cell])

  const renderBoard = useCallback(() => {
    if (!meta.size) return null

    return [
      ...board.board
        .map((row, y) => [
          ...row.reduce<JSX.Element[]>((prev, curr, x) => {
            const render = renderCell(curr, x, y)
            if (render) {
              return [...prev, render]
            }
            return prev
          }, []),
        ])
        .flat(),
    ]
  }, [meta])

  return (
    <div
      role="grid"
      className="bg-gradient-to-br from-primary-dark to-secondary-dark w-full flex-none aspect-square rounded-xl border-8 border-primary-main max-w-full max-h-full relative overflow-hidden"
    >
      {/* {renderBoard()} */}
      <svg
        width={meta.size + 2}
        height={meta.size + 2}
        viewBox={`0 0 ${meta.size + 2} ${meta.size + 2}`}
        className="w-full h-full"
      >
        {renderBoard()}
        <Player />
        {Object.entries(boxes).map(([id, box]) => (
          <Box key={id} {...box} />
        ))}
      </svg>
    </div>
  )
}
