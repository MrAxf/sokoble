import React from 'react'
import { MdHelp, MdOutlinePoll, MdSettings } from 'react-icons/md'
import { Link } from 'wouter'

export default function Navbar() {
  return (
    <nav className="flex w-full px-2 max-w-[500px] flex-row justify-center">
      <Link href="/help" className="flex-none cursor-pointer">
        <a className="grid place-items-center rounded-md p-2 text-2xl text-white transition hover:bg-gray-500 hover:bg-opacity-50">
          <MdHelp></MdHelp>
        </a>
      </Link>
      <div className="w-[40px] flex-none"></div>
      <div className="flex-auto"></div>
      <Link href="/" className="flex-none cursor-pointer">
        <a className="grid place-items-center rounded-md p-2 transition hover:bg-gray-500 hover:bg-opacity-50">
          <h1 className="bg-gradient-to-br from-indigo-700 to-red-600 bg-clip-text text-center text-4xl font-bold text-transparent ">
            Sokoble
          </h1>
        </a>
      </Link>
      <div className="flex-auto"></div>
      <Link href="/stats" className="flex-none cursor-pointer">
        <a className="grid place-items-center rounded-md p-2 text-2xl text-white transition hover:bg-gray-500 hover:bg-opacity-50">
          <MdOutlinePoll></MdOutlinePoll>
        </a>
      </Link>
      <Link href="/config" className="flex-none cursor-pointer">
        <a className="grid place-items-center rounded-md p-2 text-2xl text-white transition hover:bg-gray-500 hover:bg-opacity-50">
          <MdSettings></MdSettings>
        </a>
      </Link>
    </nav>
  )
}
