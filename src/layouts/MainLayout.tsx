import { ReactNode } from "react"
import Navbar from "../components/Navbar"

type PageLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex h-screen flex-col">
        <header className="flex flex-none flex-row justify-center bg-slate-900 py-2">
          <Navbar></Navbar>
        </header>
        <main className="flex-auto bg-slate-800 overflow-hidden">
          {children}
        </main>
        <footer className="flex flex-none flex-row justify-center bg-slate-900 py-1">
          <span className="text-center text-sm text-white">ⓒAxford 2022</span>
        </footer>
      </div>
  )
}
