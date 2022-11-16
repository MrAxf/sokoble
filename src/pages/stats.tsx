import dynamic from 'next/dynamic'

const StatsPanel = dynamic(() => import('../components/StatsPanel'), {
  ssr: false,
})

export default function Stats() {
  return (
    <div className="flex flex-col text-2xl">
      <StatsPanel />
    </div>
  )
}
