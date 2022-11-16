import dynamic from 'next/dynamic'

const SokobanGame = dynamic(() => import('../components/SokobanGame'), {
  ssr: false,
})

export default function Index() {
  return (
    <div className="h-full">
      <SokobanGame />
    </div>
  )
}
