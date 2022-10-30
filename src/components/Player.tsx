import { motion } from 'framer-motion'
import useSokoban from '../uses/useSokoban'

export default function Player() {
  const { meta, player } = useSokoban()


  return (
    <motion.div
      className="absolute aspect-square rounded-full bg-player"
      style={{ width: `${meta.squarePercent}%` }}
      animate={{
        left: `${(meta.walls.left + player.x) * meta.squarePercent}%`,
        top: `${(meta.walls.top + player.y) * meta.squarePercent}%`,
      }}
    ></motion.div>
  )
}
