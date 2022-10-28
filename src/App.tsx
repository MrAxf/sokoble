import { ReactNode, Suspense, lazy, useEffect } from 'react'
import { RecoilRoot, useRecoilState } from 'recoil'
import { Route, Router, Switch } from 'wouter'

import MainLayout from './layouts/MainLayout'
import PageLayout from './layouts/PageLayout'
import getLevel from './services/getLevel'
import currentBoard from './store/currentBoard'
import useHashLocation from './uses/useHashLocation'

const loadingFallback = (): ReactNode => (
  <div className="text-white tex-xl">Loading...</div>
)

const Index = lazy(() => import('./pages/Index'))
const Stats = lazy(() => import('./pages/Stats'))
const Config = lazy(() => import('./pages/Config'))
const Help = lazy(() => import('./pages/Help'))

function App() {

  const [, setCurrentBoard] = useRecoilState(currentBoard)

  useEffect(() => {
    (async () => {
      const board = await getLevel()
      setCurrentBoard(board)
    })()
  }, [])

  return (
    <Router base="/sokoble" hook={useHashLocation}>
      <MainLayout>
        <PageLayout>
          <Suspense fallback={loadingFallback()}>
            <Switch>
              <Route path="/">{() => <Index />}</Route>
              <Route path="/stats">{() => <Stats />}</Route>
              <Route path="/config">{() => <Config />}</Route>
              <Route path="/help">{() => <Help />}</Route>
              <Route>404 Page not found</Route>
            </Switch>
          </Suspense>
        </PageLayout>
      </MainLayout>
    </Router>
  )
}

export default App
