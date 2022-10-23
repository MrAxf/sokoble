import { SokobanProvider } from '../providers/SokobanProvider'
import SokobanContainer from './SokobanContainer'
import SokobanControls from './SokobanControls'
import SokobanGrid from './SokobanGrid'

export default function SokobanGame() {
  return (
    <SokobanProvider
      board={{
        name: "test",
        board: [
          ['BLOCK', 'FREE',  'FREE',  'BLOCK', 'BLOCK',  'BLOCK',  'FREE',  'FREE' ],
          ['FREE',  'FREE',  'FREE',  'FREE',  'FREE',   'FREE',   'FREE',  'FREE' ],
          ['FREE',  'FREE',  'FREE',  'FREE',  'FREE',   'BLOCK',  'FREE',  'FREE' ],
          ['BLOCK', 'FREE',  'FREE',  'BLOCK', 'BLOCK',  'BLOCK',  'FREE',  'FREE' ],
          ['BLOCK', 'FREE',  'FREE',  'BLOCK', 'BUTTON', 'BUTTON', 'FREE',  'FREE' ],
          ['BLOCK', 'FREE',  'BLOCK', 'BLOCK', 'BUTTON', 'BLOCK',  'FREE',  'BLOCK'],
          ['FREE',  'FREE',  'FREE',  'FREE',  'FREE',   'FREE',   'BLOCK', 'BLOCK'],
          ['FREE',  'FREE',  'FREE',  'FREE',  'FREE',   'BLOCK',  'BLOCK', 'BLOCK'],
        ],
        player: { x: 2, y: 2 },
        boxes: [
          { x: 3, y: 2 },
          { x: 2, y: 3 },
          { x: 1, y: 1 },
        ],
      }}
    >
      <SokobanContainer>
        <SokobanGrid />
        <div className='flex-grow'></div>
        <SokobanControls />
      </SokobanContainer>
    </SokobanProvider>
  )
}
