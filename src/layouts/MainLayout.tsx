import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import { Open_Sans } from 'next/font/google'
import Confetti from '../components/Confetti'

const mainFont = Open_Sans({
  weight: 'variable',
  subsets: ['latin'],
})

interface PageLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: PageLayoutProps) {
  return (
    <div className={`flex h-screen flex-col ${mainFont.className}`}>
      <Confetti />
      <header className="flex flex-none flex-row justify-center bg-slate-200 py-2 dark:bg-slate-900">
        <Navbar></Navbar>
      </header>
      <main className="flex-auto overflow-hidden">{children}</main>
      <footer className="flex flex-none flex-row justify-center bg-slate-200 py-1 dark:bg-slate-900">
        <span className="text-center text-sm">Axford ⓒ 2022</span>
      </footer>
    </div>
  )
}
