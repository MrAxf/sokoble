import { motion, useAnimation } from 'framer-motion'
import { useEffect, useMemo } from 'react'
import { useRecoilValue } from 'recoil'

import { gamesCompleted, gamesPlayed } from '../store/gameStats'

export default function StatsPanel() {
  const currentGamesPlayed = useRecoilValue(gamesPlayed)
  const currentGamesCompleted = useRecoilValue(gamesCompleted)

  const animation = useAnimation()

  const ratio = useMemo(
    () => Math.round((currentGamesCompleted / currentGamesPlayed) * 10000) / 100 || 0,
    [currentGamesCompleted, currentGamesPlayed]
  )

  useEffect(() => {
    animation.start({
      width: `${Math.min(
        ratio,
        100
      )}%`,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ratio])

  return (
    <>
      <span className="mt-6 mb-3 font-bold">Juegos jugados:</span>
      <span>{currentGamesPlayed}</span>
      <span className="mt-6 mb-3 font-bold">Juegos completados:</span>
      <span>{currentGamesCompleted}</span>
      <motion.div className="relative my-6 w-full overflow-hidden rounded-xl bg-primary-main py-3 text-center font-bold text-white after:content-['']">
        <motion.div
          className="absolute top-0 left-0 h-full bg-box-success-primary"
          animate={animation}
        ></motion.div>
        <span className="relative">
          {ratio}%
        </span>
      </motion.div>
    </>
  )
}
