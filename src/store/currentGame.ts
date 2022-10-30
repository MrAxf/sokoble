import { atom, selector } from 'recoil'

const gameName = atom({
  key: 'gameName',
  default: globalThis.localStorage?.getItem('gameName') || '',
})

const gamePlayer = atom<Point>({
  key: 'gamePlayer',
  default: (JSON.parse(
    globalThis.localStorage?.getItem('gamePlayer') || 'false'
  ) as Point) || { x: 0, y: 0 },
})

const gameBoxes = atom<{ [key: number]: Box }>({
  key: 'gameBoxes',
  default:
    (JSON.parse(globalThis?.localStorage?.getItem('gameBoxes') || 'false') as {
      [key: number]: Box
    }) || {},
})

const gameUndos = atom<{player: Point, box?: [number, Box] }[]>({
  key: 'gameUndos',
  default:
    (JSON.parse(globalThis?.localStorage?.getItem('gameUndos') || 'false') as {
      player: Point
      box?: [number, Box]
    }[]) || [],
})

export const currentGameName = selector({
  key: 'currentGameName',
  get: ({ get }) => get(gameName),
  set: ({ set }, newValue) => {
    set(gameName, newValue)
    globalThis.localStorage.setItem('gameName', newValue.toString())
  },
})

export const currentGamePlayer = selector({
  key: 'currentGamePlayer',
  get: ({ get }) => get(gamePlayer),
  set: ({ set }, newValue) => {
    set(gamePlayer, newValue)
    globalThis.localStorage.setItem('gamePlayer', JSON.stringify(newValue))
  },
})

export const currentGameBoxes = selector({
  key: 'currentGameBoxes',
  get: ({ get }) => get(gameBoxes),
  set: ({ set }, newValue) => {
    set(gameBoxes, newValue)
    globalThis.localStorage.setItem('gameBoxes', JSON.stringify(newValue))
  },
})

export const currentGameUndos = selector({
  key: 'currentGameUndos',
  get: ({ get }) => get(gameUndos),
  set: ({ set }, newValue) => {
    set(gameUndos, newValue)
    globalThis.localStorage.setItem('gameUndos', JSON.stringify(newValue))
  },
})
