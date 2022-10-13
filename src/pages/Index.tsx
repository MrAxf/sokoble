import SokobanGame from "../components/SokobanGame";

export default function Index() {
  return (
    <SokobanGame
      board={{
        board: [
          ["FREE", "FREE"],
          ["BLOCK", "BUTTON"],
        ],
        player: { x: 0, y: 0 },
        boxes: [{ x: 1, y: 0 }],
      }}
    />
  )
}
