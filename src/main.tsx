import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'

import App from './App'
import './index.css'
import { ThemeProvider } from './providers/DarkThemeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider initialTheme='dark'>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
)
