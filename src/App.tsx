import { MdHelp, MdOutlinePoll, MdSettings } from 'react-icons/md'
import { Link, Route, Switch } from 'wouter'

import Config from './pages/Config'
import Help from './pages/Help'
import Index from './pages/Index'
import Stats from './pages/Stats'

function App() {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex flex-none flex-row justify-center bg-slate-900 py-2">
        <nav className="flex w-full max-w-[500px] flex-row justify-center">
          <Link href="/help" className="flex-none">
            <a className="grid place-items-center rounded-md p-2 text-2xl text-white transition hover:bg-gray-500 hover:bg-opacity-50">
              <MdHelp></MdHelp>
            </a>
          </Link>
          <div className="w-[40px] flex-none"></div>
          <div className="flex-auto"></div>
          <Link href="/" className="flex-none">
            <a className="grid place-items-center rounded-md p-2 transition hover:bg-gray-500 hover:bg-opacity-50">
              <h1 className="bg-gradient-to-br from-indigo-700 to-red-600 bg-clip-text text-center text-4xl font-bold text-transparent ">
                Sokoble
              </h1>
            </a>
          </Link>
          <div className="flex-auto"></div>
          <Link href="/stats" className="flex-none">
            <a className="grid place-items-center rounded-md p-2 text-2xl text-white transition hover:bg-gray-500 hover:bg-opacity-50">
              <MdOutlinePoll></MdOutlinePoll>
            </a>
          </Link>
          <Link href="/config" className="flex-none">
            <a className="grid place-items-center rounded-md p-2 text-2xl text-white transition hover:bg-gray-500 hover:bg-opacity-50">
              <MdSettings></MdSettings>
            </a>
          </Link>
        </nav>
      </header>
      <main className="flex-auto bg-slate-800">
        <div className="h-full w-full max-w-[500px] mx-auto">
          <Switch>
            <Route path="/" component={Index}></Route>
            <Route path="/stats" component={Stats}></Route>
            <Route path="/config" component={Config}></Route>
            <Route path="/help" component={Help}></Route>
          </Switch>
        </div>
      </main>
      <footer className="flex flex-none flex-row justify-center bg-slate-900 py-1">
        <span className="text-center text-sm text-white">ⓒAxford 2022</span>
      </footer>
    </div>
  )
}

export default App
