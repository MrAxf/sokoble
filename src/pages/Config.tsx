import { motion } from 'framer-motion'

import Switch from '../components/Switch'
import useTheme from '../uses/useTheme'
import pageAnimation from '../utils/pageAnimation'

export default function Config() {

  const {theme, toggle} = useTheme()

  const onThemeChange = () => {
    toggle()
  }

  return (
    <motion.div key="config" {...pageAnimation} className="text-white tex-xl">
      <Switch
        label={theme}
        checked={theme === 'dark'}
        onChange={onThemeChange}
      ></Switch>
    </motion.div>
  )
}
