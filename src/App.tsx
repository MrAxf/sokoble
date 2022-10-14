import { ReactNode, Suspense, lazy } from 'react'
import { MdHelp, MdOutlinePoll, MdSettings } from 'react-icons/md'
import { Link, Route, Router, Switch } from 'wouter'

const loadingFallback = (): ReactNode => <p>Loading...</p>

const Index = lazy(() => import('./pages/Index'))
const Stats = lazy(() => import('./pages/Stats'))
const Config = lazy(() => import('./pages/Config'))
const Help = lazy(() => import('./pages/Help'))

function App() {
  return (
    <Router base="/sokoble">
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
            <Suspense fallback={loadingFallback()}>
              <Switch>
                <Route path="/">{() => <Index />}</Route>
                <Route path="/stats">{() => <Stats />}</Route>
                <Route path="/config">{() => <Config />}</Route>
                <Route path="/help">{() => <Help />}</Route>
                <Route>404 Page not found</Route>
              </Switch>
            </Suspense>
          </div>
        </main>
        <footer className="flex flex-none flex-row justify-center bg-slate-900 py-1">
          <span className="text-center text-sm text-white">ⓒAxford 2022</span>
        </footer>
      </div>
    </Router>
  )
}

export default App
