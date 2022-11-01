import { createClient } from '@supabase/supabase-js'

import levels from './classic.js'

const supabase = createClient(
  '',
  '',
  { db: { schema: 'public' } }
)

const toLevel = (plane, name) => {
  const level = {
    name,
    board: [],
    boxes: [],
    player: { x: 0, y: 0 }
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

// for (let i = 0; i < levels.length; i++) {
//   const element = levels[i]
//   const name = `classic ${i}`
//   const level = toLevel(element, name)
//   await supabase.from('levels').insert({
//     name,
//     level
//   })
// }

const baseDate = new Date("2022-01-01")
const { count } =  await supabase.from('levels').select('*', { count: 'exact', head: true })
const today = new Date()
today.setHours(0, 0, 0, 0)

const day = Math.ceil(
  (today.getTime() - baseDate.getTime()) / (1000 * 3600 * 24)
)

const levelNo = day % count

console.log(day, count, levelNo)

console.log(
  await supabase
    .from('levels')
    .select('*')
    .range(levelNo + 1, levelNo + 1)
    .single()
)
