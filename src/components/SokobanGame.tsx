import { SokobanProvider } from '../providers/SokobanProvider'
import SokobanContainer from './SokobanContainer'
import SokobanControls from './SokobanControls'
import SokobanGrid from './SokobanGrid'
import SokobanStats from './SokobanStats'

interface SokobanGameProps {
  board: SokobanBoard
}

export default function SokobanGame({ board }: SokobanGameProps) {
  return (
    <SokobanProvider board={board}>
      <SokobanContainer>
        <SokobanGrid />
        <SokobanStats></SokobanStats>
        <SokobanControls />
      </SokobanContainer>
    </SokobanProvider>
  )
}
