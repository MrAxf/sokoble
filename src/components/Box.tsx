import { motion } from 'framer-motion'

import useSokoban from '../uses/useSokoban'
import tailwindData from '../utils/tailwindData'

interface BoxProps {
  x: number
  y: number
  inButton: boolean
}

export default function Box({ x, y, inButton }: BoxProps) {
  const { meta } = useSokoban()

  return (
    <>
      <motion.rect
        width="1"
        height="1"
        rx="0.3"
        ry="0.3"
        animate={{
          x: meta.walls.left + x,
          y: meta.walls.top + y,
          fill: inButton
            ? tailwindData.theme.colors["box"].success.primary
            : tailwindData.theme.colors["box"].primary,
        }}
      ></motion.rect>
      <motion.rect
        width="0.5"
        height="0.5"
        rx="0.15"
        ry="0.15"
        animate={{
          x: meta.walls.left + x + 0.25,
          y: meta.walls.top + y + 0.25,
          fill: inButton
            ? tailwindData.theme.colors["box"].success.secondary
            : tailwindData.theme.colors["box"].secondary,
        }}
      ></motion.rect>
    </>
  )
}
