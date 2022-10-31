import Switch from '../components/Switch'
import { useTheme } from 'next-themes'

export default function Config() {
  const { theme, setTheme } = useTheme()

  const onThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="text-xl">
      <Switch
        label="Cambiar modo"
        checked={theme === 'dark'}
        onChange={onThemeChange}
      ></Switch>
    </div>
  )
}
