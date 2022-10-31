import Switch from '../components/Switch'
import useTheme from '../uses/useTheme'

export default function Config() {
  const { theme, toggle } = useTheme()

  const onThemeChange = () => {
    toggle()
  }

  return (
    <div className="text-xl">
      <Switch
        label={theme}
        checked={theme === 'dark'}
        onChange={onThemeChange}
      ></Switch>
    </div>
  )
}
