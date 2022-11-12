import { AnimatePresence, motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'

import Loader from '../components/Loader'
import SokobanGame from '../components/SokobanGame'
import currentBoard from '../store/currentBoard'

const loaderTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.15 },
}

export default function Index() {
  const board = useRecoilValue(currentBoard)

  return (
    <div className="h-full">
      <AnimatePresence initial={false} mode="wait">
        {board ? (
          <motion.div key="main" className="h-full" {...loaderTransition}>
            <SokobanGame board={board} />
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
    </div>
  )
}
