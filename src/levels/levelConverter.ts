const toLevel = (plane: string, name: string) => {
  const level: SokobanBoard = {
    name,
    board: [],
    boxes: [],
    player: { x: 0, y: 0 },
  }
  const unoptimizedBoard = []
  let row: SokobanCell[] = []
  let lastCol = -1
  let x = -1
  let y = -1
  for (let i = 0; i < plane.length; i++) {
    const block = plane[i]
    switch (block) {
      case '#':
        row.push('BLOCK')
        lastCol = Math.max(lastCol, x)
        break

      case ' ':
        row.push('FREE')
        break

      case '.':
        row.push('BUTTON')
        break

      case '*':
        row.push('BUTTON')
        level.boxes.push({ x: x - 1, y })
        break

      case '$':
        row.push('FREE')
        level.boxes.push({ x: x - 1, y })
        break

      case '@':
        row.push('FREE')
        level.player = { x: x - 1, y }
        break

      case '|':
        unoptimizedBoard.push(row)
        row = []
        x = -1
        y++
        break

      default:
        break
    }
    x++
  }
  for (let i = 1; i < unoptimizedBoard.length; i++) {
    const levelRow = unoptimizedBoard[i]
    level.board.push(levelRow.slice(1, lastCol))
  }
  return level
}

export default toLevel
