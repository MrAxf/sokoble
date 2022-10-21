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
          ['BLOCK', 'BLOCK', 'BLOCK', 'FREE',  'BLOCK', 'BLOCK',  'BLOCK',  'BLOCK', 'BLOCK', 'BLOCK'],
          ['BLOCK', 'BLOCK', 'FREE',  'FREE',  'BLOCK', 'BLOCK',  'BLOCK',  'FREE',  'FREE',  'FREE'],
          ['BLOCK', 'FREE',  'FREE',  'FREE',  'FREE',  'FREE',   'FREE',   'FREE',  'FREE',  'FREE'],
          ['FREE',  'FREE',  'FREE',  'FREE',  'FREE',  'FREE',   'BLOCK',  'FREE',  'FREE',  'FREE'],
          ['BLOCK', 'BLOCK', 'FREE',  'FREE',  'BLOCK', 'BLOCK',  'BLOCK',  'FREE',  'FREE',  'FREE'],
          ['BLOCK', 'BLOCK', 'FREE',  'FREE',  'BLOCK', 'BUTTON', 'BUTTON', 'FREE',  'FREE',  'FREE'],
          ['BLOCK', 'BLOCK', 'FREE',  'BLOCK', 'BLOCK', 'BUTTON', 'BLOCK',  'FREE',  'BLOCK', 'BLOCK'],
          ['BLOCK', 'FREE',  'FREE',  'FREE',  'FREE',  'FREE',   'FREE',   'BLOCK', 'BLOCK', 'BLOCK'],
          ['BLOCK', 'FREE',  'FREE',  'FREE',  'FREE',  'FREE',   'BLOCK',  'BLOCK', 'BLOCK', 'BLOCK'],
        ],
        player: { x: 3, y: 3 },
        boxes: [
          { x: 4, y: 3 },
          { x: 3, y: 4 },
          { x: 2, y: 2 },
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
