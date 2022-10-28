import { motion } from 'framer-motion'

import Switch from '../components/Switch'
import pageAnimation from '../utils/pageAnimation'

export default function Config() {
  return (
    <motion.div key="config" {...pageAnimation} className="text-white tex-xl">
      <Switch
        label="Hola"
        onChange={(evt) => {
          console.log(evt.target.value)
        }}
      ></Switch>
    </motion.div>
  )
}
