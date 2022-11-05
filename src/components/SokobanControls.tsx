import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
  MdReplay,
  MdUndo,
} from 'react-icons/md'

import useSokoban from '../uses/useSokoban'
import HoldButton from './HoldButton'
import TickButton from './TickButton'

export default function SokobanControls() {
  const { movePlayer, undo, reset, hasWin } = useSokoban()

  const onButtonTick = (direction: Direction) => () => {
    movePlayer(direction)
  }

  return (
    <div className="flex-grow grid max-h-[250px] grid-cols-3 grid-rows-2 gap-2 p-2 pb-14">
      <TickButton
        onTick={undo}
        className="row-start-1 col-start-1"
        disabled={hasWin}
      >
        <MdUndo />
      </TickButton>
      <TickButton
        onTick={onButtonTick('up')}
        className="row-start-1 col-start-2"
        disabled={hasWin}
      >
        <MdKeyboardArrowUp />
      </TickButton>
      <HoldButton
        onHoldEnded={reset}
        className="row-start-1 col-start-3"
        disabled={hasWin}
      >
        <MdReplay />
      </HoldButton>
      <TickButton
        onTick={onButtonTick('left')}
        className="row-start-2 col-start-1"
        disabled={hasWin}
      >
        <MdKeyboardArrowLeft />
      </TickButton>
      <TickButton
        onTick={onButtonTick('down')}
        className="row-start-2 col-start-2"
        disabled={hasWin}
      >
        <MdKeyboardArrowDown />
      </TickButton>
      <TickButton
        onTick={onButtonTick('right')}
        className="row-start-2 col-start-3"
        disabled={hasWin}
      >
        <MdKeyboardArrowRight />
      </TickButton>
    </div>
  )
}
