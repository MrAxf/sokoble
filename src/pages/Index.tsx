import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'

import SokobanGame from '../components/SokobanGame'
import currentBoard from '../store/currentBoard'
import pageAnimation from '../utils/pageAnimation'

export default function Index() {
  const board = useRecoilValue(currentBoard)

  return (
    <motion.div key="index" {...pageAnimation} className="h-full">
      {board ? <SokobanGame board={board} /> : 'Loading...'}
    </motion.div>
  )
}
