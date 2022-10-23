import { atom } from "recoil";

const currentGame = atom<{gameName?: string, player?: Point, boxes?: { [key: number]: Box } }>({
  key: 'currentGame',
  default: {
    gameName: undefined,
    player: undefined,
    boxes: undefined,
  }
})
