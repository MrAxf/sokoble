import { useCallback, useContext } from "react"
import { ThemeContext } from "../providers/DarkThemeProvider"

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme])

  return {theme, toggle}
}

export default useTheme
