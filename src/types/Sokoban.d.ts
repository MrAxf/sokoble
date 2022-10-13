type SokobanCell = "BLOCK" | "FREE" | "BUTTON"

type SokobanBoard = {
  board: SokobanCell[][]
  player: Point
  boxes: Point[]
}