import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'config'])),
    },
  }
}

const DeleteDataButton = dynamic(
  () => import('../components/DeleteDataButton'),
  { ssr: false }
)

const ThemeSelector = dynamic(() => import('../components/ThemeSelector'), {
  ssr: false,
})

export default function Config() {
  return (
    <div className="flex flex-col">
      <div className="text-xl mb-6">
        <ThemeSelector />
      </div>
      <DeleteDataButton />
    </div>
  )
}
