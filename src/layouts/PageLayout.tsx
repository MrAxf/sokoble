import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useLocation } from 'wouter'

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [location] = useLocation()

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.div
        key={location}
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ duration: 0.3 }}
        className="h-full w-full max-w-[500px] mx-auto p-2"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
