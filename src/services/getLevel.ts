
const getLevel = async () => {
  const sokobanResponse = await fetch('/api/level')
  const sokobanLevel = (await sokobanResponse.json()) as SokobanBoard
  return sokobanLevel
}

export default getLevel
