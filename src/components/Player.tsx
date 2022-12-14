import { motion } from 'framer-motion'
import useSokoban from '../uses/useSokoban'
import tailwindData from '../utils/tailwindData'

export default function Player() {
  const { meta, player } = useSokoban()

  return (
    <motion.circle
      style={{ fill: tailwindData.theme.colors['player'] }}
      r="0.5"
      animate={{
        cx: meta.walls.left + player.x + 0.5,
        cy: meta.walls.top + player.y + 0.5,
      }}
    ></motion.circle>
  )
}
