import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
}

const pageAnimation = {
  initial: { opacity: 0, x: '-100%' },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: '100%' },
  transition: { duration: 0.2 },
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { asPath } = useRouter()

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={asPath}
        {...pageAnimation}
        className="mx-auto h-full w-full max-w-[500px] p-7 z-2"
      >
        <AnimatePresence initial={true} mode="sync">
          {children}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}
