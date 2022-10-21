import { useRecoilValue } from 'recoil'

import { SokobanProvider } from '../providers/SokobanProvider'
import SokobanContainer from './SokobanContainer'
import SokobanControls from './SokobanControls'
import SokobanGrid from './SokobanGrid'

export default function SokobanGame() {
  return (
    <SokobanProvider
      board={{
        board: [
          ['BLOCK', 'FREE', 'FREE', 'FREE', 'FREE', 'FREE', 'BLOCK'],
          ['BLOCK', 'FREE', 'FREE', 'FREE', 'FREE', 'FREE', 'BLOCK'],
          ['BLOCK', 'FREE', 'FREE', 'FREE', 'FREE', 'FREE', 'BLOCK'],
          ['BLOCK', 'FREE', 'FREE', 'FREE', 'FREE', 'FREE', 'BLOCK'],
          ['BLOCK', 'FREE', 'FREE', 'FREE', 'FREE', 'FREE', 'BLOCK'],
          ['BLOCK', 'FREE', 'FREE', 'FREE', 'FREE', 'FREE', 'BLOCK'],
          ['BLOCK', 'FREE', 'FREE', 'FREE', 'FREE', 'FREE', 'BLOCK'],
        ],
        player: { x: 1, y: 0 },
        boxes: [
          { x: 3, y: 3 },
          { x: 3, y: 4 },
        ],
      }}
    >
      <SokobanContainer>
        <SokobanGrid />
        <SokobanControls />
      </SokobanContainer>
    </SokobanProvider>
  )
}
