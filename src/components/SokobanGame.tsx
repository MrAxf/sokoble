import { AnimatePresence, motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'

import { SokobanProvider } from '../providers/SokobanProvider'
import currentBoard from '../store/currentBoard'
import Loader from './Loader'
import SokobanContainer from './SokobanContainer'
import SokobanControls from './SokobanControls'
import SokobanGrid from './SokobanGrid'
import SokobanStats from './SokobanStats'

const loaderTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.15 },
}

export default function SokobanGame() {
  const board = useRecoilValue(currentBoard)

  return (
    <AnimatePresence initial={false} mode="wait">
      {board ? (
        <motion.div key="main" className="h-full" {...loaderTransition}>
          <SokobanProvider board={board}>
            <SokobanContainer>
              <SokobanGrid />
              <div className="flex flex-grow flex-col justify-between">
                <SokobanStats />
                <SokobanControls />
              </div>
            </SokobanContainer>
          </SokobanProvider>
        </motion.div>
      ) : (
        <motion.div
          key="laoding"
          className="grid h-full place-content-center"
          {...loaderTransition}
        >
          <Loader />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
