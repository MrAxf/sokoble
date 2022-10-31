import { useRecoilValue } from 'recoil'

import SokobanGame from '../components/SokobanGame'
import currentBoard from '../store/currentBoard'

export default function Index() {
  const board = useRecoilValue(currentBoard)

  return (
    <div className="h-full">
      {board ? <SokobanGame board={board} /> : 'Loading...'}
    </div>
  )
}
