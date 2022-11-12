import { Open_Sans } from '@next/font/google'
import Link from 'next/link'
import { MdHelp, MdOutlinePoll, MdSettings } from 'react-icons/md'

const logoFont = Open_Sans({
  weight: '800',
  subsets: ['latin'],
})

export default function Navbar() {
  return (
    <nav className="flex w-full max-w-[500px] flex-row justify-center px-2">
      <Link
        href="/help"
        className="grid flex-none cursor-pointer place-items-center rounded-md p-2 text-2xl transition hover:bg-gray-500 hover:bg-opacity-50"
      >
        <MdHelp></MdHelp>
      </Link>
      <div className="w-[40px] flex-none"></div>
      <div className="flex-auto"></div>
      <Link
        href="/"
        className="grid flex-none cursor-pointer place-items-center rounded-md p-2 transition hover:bg-gray-500 hover:bg-opacity-50"
      >
        <h1
          className={`bg-gradient-to-br from-primary-main to-secondary-main bg-clip-text text-center text-4xl font-bold text-transparent ${logoFont.className}`}
        >
          Sokoble
        </h1>
      </Link>
      <div className="flex-auto"></div>
      <Link
        href="/stats"
        className="grid flex-none cursor-pointer place-items-center rounded-md p-2 text-2xl transition hover:bg-gray-500 hover:bg-opacity-50"
      >
        <MdOutlinePoll></MdOutlinePoll>
      </Link>
      <Link
        href="/config"
        className="grid flex-none cursor-pointer place-items-center rounded-md p-2 text-2xl transition hover:bg-gray-500 hover:bg-opacity-50"
      >
        <MdSettings></MdSettings>
      </Link>
    </nav>
  )
}
