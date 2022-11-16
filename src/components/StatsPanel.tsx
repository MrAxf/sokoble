import { useRecoilValue } from 'recoil'
import { gamesCompleted, gamesPlayed } from '../store/gameStats'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export default function StatsPanel() {
  const currentGamesPlayed = useRecoilValue(gamesPlayed)
  const currentGamesCompleted = useRecoilValue(gamesCompleted)

  const animation = useAnimation()

  useEffect(() => {
    animation.start({
      width: `${Math.min(
        (currentGamesCompleted / currentGamesPlayed) * 100,
        100
      )}%`,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <span className="my-3 font-bold">Juegos jugados:</span>
      <span>{currentGamesPlayed}</span>
      <span className="mt-5 mb-3 font-bold">Juegos completados:</span>
      <span>{currentGamesCompleted}</span>
      <motion.div className="relative my-5 w-full overflow-hidden rounded-xl bg-primary-main py-3 text-center font-bold text-white after:content-['']">
        <motion.div
          className="absolute top-0 left-0 h-full bg-box-success-primary"
          animate={animation}
        ></motion.div>
        <span className="relative">
          {(currentGamesCompleted / currentGamesPlayed) * 100}%
        </span>
      </motion.div>
    </>
  )
}
