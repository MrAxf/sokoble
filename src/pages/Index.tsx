import SokobanGame from '../components/SokobanGame'

export default function Index() {
  return (
    <div className='p-5'>
      <SokobanGame
        board={{
          board: [
            ['FREE', 'FREE', "FREE", "FREE", "FREE", "FREE", "BLOCK"],
            ['FREE', 'FREE', "FREE", "FREE", "FREE", "FREE", "FREE"],
            ['FREE', 'FREE', "FREE", "FREE", "FREE", "FREE", "FREE"],
            ['FREE', 'FREE', "FREE", "BUTTON", "FREE", "FREE", "FREE"],
            ['FREE', 'FREE', "FREE", "FREE", "FREE", "FREE", "FREE"],
            ['FREE', 'BLOCK', "FREE", "FREE", "FREE", "FREE", "FREE"],
            ['FREE', 'FREE', "FREE", "FREE", "FREE", "FREE", "FREE"],
          ],
          player: { x: 0, y: 0 },
          boxes: [{ x: 1, y: 0 }],
        }}
      />
    </div>
  )
}
