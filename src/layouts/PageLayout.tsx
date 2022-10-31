import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import pageAnimation from '../utils/pageAnimation'

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { asPath } = useRouter()

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={asPath}
        {...pageAnimation}
        className="h-full w-full max-w-[500px] mx-auto p-2"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
