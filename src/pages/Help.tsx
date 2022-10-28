import { motion } from 'framer-motion'

import pageAnimation from '../utils/pageAnimation'

export default function Help() {
  return (
    <motion.div key="help" {...pageAnimation} className="text-white tex-xl">
      Help
    </motion.div>
  )
}
