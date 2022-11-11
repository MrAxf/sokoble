import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

type PageLayoutProps = {
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
        className="h-full w-full max-w-[500px] mx-auto p-7"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
