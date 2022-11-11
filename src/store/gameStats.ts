import { atom, selector } from 'recoil'

const _gamesPlayed = atom<number>({
  key: '_gamesPlayed',
  default: Number(globalThis?.localStorage?.getItem('gamesPlayed') || '') || 0,
})

const _gamesCompleted = atom<number>({
  key: '_gamesCompleted',
  default: Number(globalThis?.localStorage?.getItem('gamesCompleted') || '') || 0,
})

export const gamesPlayed = selector({
  key: 'gamesPlayed',
  get: ({ get }) => get(_gamesPlayed),
  set: ({ set }, newValue: number) => {
    set(_gamesPlayed, newValue)
    globalThis.localStorage.setItem('gamesPlayed', `${newValue}`)
  },
})

export const gamesCompleted = selector({
  key: 'gamesCompleted',
  get: ({ get }) => get(_gamesCompleted),
  set: ({ set }, newValue: number) => {
    set(_gamesPlayed, newValue)
    globalThis.localStorage.setItem('gamesCompleted', `${newValue}`)
  },
})
