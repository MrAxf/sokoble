import level from './level.json'

const getLevel = async () => {
  const sokobanLevel = (await level) as SokobanBoard
  return sokobanLevel
}

export default getLevel
