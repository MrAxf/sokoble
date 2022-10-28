import { motion } from 'framer-motion'

import pageAnimation from '../utils/pageAnimation'

export default function Stats() {
  return (
    <motion.div key="stats" {...pageAnimation} className="text-white tex-xl">
      Stats
    </motion.div>
  )
}
