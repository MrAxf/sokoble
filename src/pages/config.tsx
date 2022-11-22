import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'

import Switch from '../components/Switch'

const DeleteDataButton = dynamic(
  () => import('../components/DeleteDataButton'),
  { ssr: false }
)

export default function Config() {
  const { theme, setTheme } = useTheme()

  const onThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="flex flex-col">
      <div className="text-xl mb-6">
        <Switch
          label="Modo oscuro"
          checked={theme === 'dark'}
          onChange={onThemeChange}
        ></Switch>
      </div>
      <DeleteDataButton />
    </div>
  )
}
