import { SokobanProvider } from '../providers/SokobanProvider'
import SokobanContainer from './SokobanContainer'
import SokobanControls from './SokobanControls'
import SokobanGrid from './SokobanGrid'

interface SokobanGameProps {
  board: SokobanBoard
}

export default function SokobanGame({ board }: SokobanGameProps) {
  return (
    <SokobanProvider board={board}>
      <SokobanContainer>
        <SokobanGrid />
        <div className="flex-grow"></div>
        <SokobanControls />
      </SokobanContainer>
    </SokobanProvider>
  )
}
