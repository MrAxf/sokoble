import { useContext } from 'react'

import { SokobanContext } from '../providers/SokobanProvider'

const useSokoban = () => {
  const { board, boxes, meta, player } = useContext(SokobanContext)

  return {
    board,
    boxes,
    meta,
    player,
  }
}

export default useSokoban
