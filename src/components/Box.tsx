import { motion } from 'framer-motion'
import useSokoban from '../uses/useSokoban'

interface BoxProps {
  x: number,
  y: number
}

export default function Box({ x, y }: BoxProps) {

  const { meta } = useSokoban()

  return (
    <motion.div
      className="absolute aspect-square bg-amber-700"
      style={{ width: `${meta.squarePercent}%` }}
      animate={{
        left: `${(meta.walls.left + x) * meta.squarePercent}%`,
        top: `${(meta.walls.top + y) * meta.squarePercent}%`,
      }}
    ></motion.div>
  )
}
