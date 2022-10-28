import { atom } from "recoil";

const currentBoard = atom<SokobanBoard>({
  key: 'currentBoard',
  default: undefined,
})

export default currentBoard
