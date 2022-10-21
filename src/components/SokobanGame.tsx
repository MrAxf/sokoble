import { useRecoilValue } from 'recoil'

import { SokobanProvider } from '../providers/SokobanProvider'
import sokobanBoard from '../store/sokobanBoard'
import Player from './Player'
import SokobanContainer from './SokobanContainer'
import SokobanControls from './SokobanControls'
import SokobanGrid from './SokobanGrid'

export default function SokobanGame() {
  const board = useRecoilValue(sokobanBoard)

  return (
    <SokobanProvider board={board}>
      <SokobanContainer>
        <SokobanGrid />
        <SokobanControls />
      </SokobanContainer>
    </SokobanProvider>
  )
}
