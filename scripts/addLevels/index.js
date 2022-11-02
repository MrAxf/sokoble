import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

import classic from './levels/classic.js'
import microban1 from './levels/microban1.js'
import microban2 from './levels/microban2.js'
import satquach1 from './levels/satquach1.js'
import satquach2 from './levels/satquach2.js'
import toLevel from './toLevel.js'

config()

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ADMIN_KEY,
  { db: { schema: 'public' } }
)

const levels = Object.entries({
  classic,
  'I microban': microban1,
  'I satquach': satquach1,
  'II microban': microban2,
  'II satquach': satquach2
})

for (let i = 0; i < levels.length; i++) {
  const [name, levelSet] = levels[i]

  console.log(`Adding ${name} levels...`)

  const { count } = await supabase
    .from('levels')
    .select('*', { count: 'exact', head: true })
    .like('name', `${name}%`)

  if (count === 0) {
    for (let j = 0; j < levelSet.length; j++) {
      const levelData = levelSet[j]
      const levelName = `${name} ${j}`
      const level = toLevel(levelData, levelName)
      await supabase.from('levels').insert({
        name: levelName,
        level
      })
    }
    console.log(`${name} added.`)
  } else {
    console.log(`${name} alredy added.`)
  }
}

console.log(`All levels added.`)
