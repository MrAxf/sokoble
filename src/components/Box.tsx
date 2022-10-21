import { motion } from 'framer-motion'
import useSokoban from '../uses/useSokoban'

interface BoxProps {
  x: number,
  y: number,
  inButton: boolean
}

export default function Box({ x, y, inButton }: BoxProps) {

  const { meta } = useSokoban()

  return (
    <motion.div
      className={`absolute aspect-square rounded-md transition ${ inButton ? 'bg-blue-700' : 'bg-orange-700' }`}
      style={{ width: `${meta.squarePercent}%` }}
      animate={{
        left: `${(meta.walls.left + x) * meta.squarePercent}%`,
        top: `${(meta.walls.top + y) * meta.squarePercent}%`,
      }}
    >
      <div className={`w-1/2 transition ${ inButton ? 'bg-blue-500' : 'bg-orange-500'} aspect-square m-[25%]`}></div>
    </motion.div>
  )
}
