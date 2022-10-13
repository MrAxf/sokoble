type SokobanBoardProps = {
  board: SokobanBoard
}

export default function SokobanGame({ board }: SokobanBoardProps) {
  return (
    <div role="grid" className="grid grid-cols-3 grid-rows-[10] gap-1 max-w-full max-h-full">

    </div>
  )
}
