import { ReactNode } from "react"
import Navbar from "../components/Navbar"
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({
  weight: "variable"
})

type PageLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: PageLayoutProps) {
  return (
    <div className={`flex h-screen flex-col ${openSans.className}`}>
        <header className="flex flex-none flex-row justify-center bg-slate-200 dark:bg-slate-900 py-2">
          <Navbar></Navbar>
        </header>
        <main className="flex-auto overflow-hidden">
          {children}
        </main>
        <footer className="flex flex-none flex-row justify-center bg-slate-200 dark:bg-slate-900 py-1">
          <span className="text-center text-sm">Axford ⓒ 2022</span>
        </footer>
      </div>
  )
}
