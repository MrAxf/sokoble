import { ReactNode } from "react"
import useSokoban from "../uses/useSokoban"

type SokobanGridProps = {
  children: ReactNode
}

export default function SokobanGrid({ children }: SokobanGridProps) {

  const { meta } = useSokoban()

  return (
    <div
        role="grid"
        className="grid w-full aspect-square rounded-xl border-4 border-violet-600 max-w-full max-h-full relative overflow-hidden"
        style={{
          gridTemplateColumns: `repeat(${(meta.size || 0) + 2}, 1fr)`,
        }}
      >
        {renderBoard()}
        {children}
      </div>
  )
}
