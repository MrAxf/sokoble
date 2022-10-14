import SokobanGame from '../components/SokobanGame'

export default function Index() {
  return (
    <div className='px-16'>
      <SokobanGame
        board={{
          board: [
            ['FREE', 'FREE', "FREE"],
            ['BLOCK', 'BUTTON', "FREE"],
          ],
          player: { x: 0, y: 0 },
          boxes: [{ x: 1, y: 0 }],
        }}
      />
    </div>
  )
}
