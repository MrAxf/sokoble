import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { useLocation } from 'wouter'

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [location] = useLocation()

  return (
    <AnimatePresence initial={false} mode="wait">
      <div className="h-full w-full max-w-[500px] mx-auto p-2">{children}</div>
    </AnimatePresence>
  )
}
