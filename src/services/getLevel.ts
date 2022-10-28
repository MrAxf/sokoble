import level from './level2.json'

const getLevel = async () => {
  const sokobanLevel = (await level) as SokobanBoard
  return sokobanLevel
}

export default getLevel
