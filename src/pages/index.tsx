import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

const SokobanGame = dynamic(() => import('../components/SokobanGame'), {
  ssr: false,
})

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'index'])),
    },
  }
}
export default function Index() {

  return (
    <div className="h-full">
      <SokobanGame />
    </div>
  )
}
