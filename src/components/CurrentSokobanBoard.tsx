import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import getLevel from '../services/getLevel'
import currentBoard from '../store/currentBoard'

export default function CurrentSokobanBoard() {
  const [, setCurrentBoard] = useRecoilState(currentBoard)

  useEffect(() => {
    ;(async () => {
      const board = await getLevel()
      setCurrentBoard(board)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
