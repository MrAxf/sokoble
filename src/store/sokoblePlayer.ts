import { atom } from 'recoil'

const sokobanPlayer = atom<Point>({
  key: 'sokobanPlayer',
  default: { x: 0, y: 0 },
})

export default sokobanPlayer
