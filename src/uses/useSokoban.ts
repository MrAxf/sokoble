import { useContext } from 'react'

import { SokobanContext } from '../providers/SokobanProvider'

const useSokoban = () => {
  const { board, boxes, meta, player, undoStack, setPlayer, setBoxes, setUndoStack } = useContext(SokobanContext)

  const movePlayer = (direction: Direction) => {
    const step = {
      up: { x: 0, y: -1 },
      down: { x: 0, y: 1 },
      left: { x: -1, y: 0 },
      right: { x: 1, y: 0 },
    }[direction]

    const next = { x: player.x + step.x, y: player.y + step.y }
    const pushNext = { x: next.x + step.x, y: next.y + step.y }

    const nextCell = board.board[next.y]?.[next.x]
    const pushNextCell = board.board[pushNext.y]?.[pushNext.x]

    let nextBox: number | undefined
    let nextPushBox: number | undefined

    Object.entries(boxes).forEach(([id, point]) => {
      if (point.x === next.x && point.y === next.y) {
        nextBox = parseInt(id)
        return
      }
      if (point.x === pushNext.x && point.y === pushNext.y) {
        nextPushBox = parseInt(id)
      }
    })

    const nextCellFree = Boolean(nextCell) && nextCell !== "BLOCK"
    const pushNextCellFree = Boolean(pushNextCell) && pushNextCell !== "BLOCK"

    if(nextBox === undefined && nextCellFree) {
      setUndoStack([...undoStack, { player: { ...player } as Point, boxes: { ...boxes } }])
      setPlayer(next)
      return
    }


    if(nextBox !== undefined && nextPushBox === undefined && nextCellFree && pushNextCellFree) {
      setUndoStack([...undoStack, { player: { ...player } as Point, boxes: { ...boxes } }])
      setPlayer(next)
      setBoxes({ ...boxes, [nextBox]: { ...pushNext, inButton: pushNextCell === "BUTTON" } })
    }
  }

  const undo = () => {
    const prevState = undoStack.at(-1)
    if(prevState) {
      setUndoStack(undoStack.slice(0, -1))
      setPlayer(prevState.player)
      setBoxes(prevState.boxes)
    }
  }

  return {
    board,
    boxes,
    meta,
    player,
    movePlayer,
    undo,
  }
}

export default useSokoban
