const nivel =
  '############       |' +
  '#..  #     ###     |' +
  '#..  # $  $  #     |' +
  '#..  #$####  #     |' +
  '#..    @ ##  #     |' +
  '#..  # #  $ ##     |' +
  '###### ##$ $ #     |' +
  '  # $  $ $ $ #     |' +
  '  #    #     #     |' +
  '  ############     '

const toLevel = (plane, name) => {
  const level = {
    name,
    board: [],
    boxes: []
  }
  const unoptimizedBoard = []
  let row = []
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
  console.log(JSON.stringify(level))
  return level
}

toLevel(nivel, 'prueba')
