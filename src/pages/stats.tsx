import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

const StatsPanel = dynamic(() => import('../components/StatsPanel'), {
  ssr: false,
})

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'stats'])),
    },
  }
}
export default function Stats() {
  return (
    <div className="flex flex-col text-2xl">
      <StatsPanel />
    </div>
  )
}
