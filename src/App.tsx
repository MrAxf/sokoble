import { ReactNode, Suspense, lazy } from 'react'
import { RecoilRoot } from 'recoil'
import { Route, Router, Switch } from 'wouter'

import MainLayout from './layouts/MainLayout'
import PageLayout from './layouts/PageLayout'

const loadingFallback = (): ReactNode => (
  <div className="text-white tex-xl">Loading...</div>
)

const Index = lazy(() => import('./pages/Index'))
const Stats = lazy(() => import('./pages/Stats'))
const Config = lazy(() => import('./pages/Config'))
const Help = lazy(() => import('./pages/Help'))

function App() {
  return (
    <RecoilRoot>
      <Router base="/sokoble">
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
    </RecoilRoot>
  )
}

export default App
