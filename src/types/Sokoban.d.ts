type SokobanCell = "BLOCK" | "FREE" | "BUTTON"

interface Box extends Point {
  inButton: boolean
}

type SokobanBoard = {
  name: string
  board: SokobanCell[][]
  player: Point
  boxes: Point[]
}
