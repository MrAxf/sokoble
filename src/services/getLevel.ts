import getRandomLevel from "../levels/levels"

const getLevel = async () => {
  const sokobanLevel = await getRandomLevel()
  return sokobanLevel
}

export default getLevel
