import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import { useTranslation } from "next-i18next"

import Switch from '../components/Switch'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'config'])),
    },
  };
}

const DeleteDataButton = dynamic(
  () => import('../components/DeleteDataButton'),
  { ssr: false }
)

export default function Config() {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation('config')

  const onThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="flex flex-col">
      <div className="text-xl mb-6">
        <Switch
          label={t("dark mode")}
          checked={theme === 'dark'}
          onChange={onThemeChange}
        ></Switch>
      </div>
      <DeleteDataButton />
    </div>
  )
}
