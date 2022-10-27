import { atom } from 'recoil'

const gameName = atom({
  key: 'gameName',
  default: globalThis.localStorage.getItem('gameName') || '',
})

const gamePlayer = atom({
  key: 'gamePlayer',
  default:
    (JSON.parse(
      globalThis.localStorage.getItem('gamePlayer') || ''
    ) as Point) || undefined,
})

const gameBoxes = atom({
  key: 'gameBoxes',
  default:
    (JSON.parse(globalThis.localStorage.getItem('gameBoxes') || '') as {
      [key: number]: Box
    }) || undefined,
})

const gameUndos = atom({
  key: 'gameUndos',
  default:
    (JSON.parse(globalThis.localStorage.getItem('gameBoxes') || '') as {
      player: Point
      box?: [number, Box]
    }[]) || undefined,
})

const currentGame = atom<{
  gameName?: string
  player?: Point
  boxes?: { [key: number]: Box }
}>({
  key: 'currentGame',
  default: {
    gameName: undefined,
    player: undefined,
    boxes: undefined,
  },
})
