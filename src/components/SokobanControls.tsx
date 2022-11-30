import { useTranslation } from 'react-i18next'
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
  const { movePlayer, undo, reset, gameCompleted } = useSokoban()
  const { t } = useTranslation('index')

  const onButtonTick = (direction: Direction) => () => {
    movePlayer(direction)
  }

  return (
    <div className="grid max-h-[250px] flex-grow grid-cols-3 grid-rows-2 gap-2 p-2 pb-14">
      {gameCompleted ? (
        <span className="my-2 col-span-3 text-3xl font-bold text-center grid place-items-center">
          {gameCompleted && t('level completed')}
        </span>
      ) : (
        <>
          <TickButton
            onTick={undo}
            className="col-start-1 row-start-1"
            disabled={gameCompleted}
          >
            <MdUndo />
          </TickButton>
          <TickButton
            onTick={onButtonTick('up')}
            className="col-start-2 row-start-1"
            disabled={gameCompleted}
          >
            <MdKeyboardArrowUp />
          </TickButton>
          <HoldButton
            onHoldEnded={reset}
            className="col-start-3 row-start-1"
            disabled={gameCompleted}
          >
            <MdReplay />
          </HoldButton>
          <TickButton
            onTick={onButtonTick('left')}
            className="col-start-1 row-start-2"
            disabled={gameCompleted}
          >
            <MdKeyboardArrowLeft />
          </TickButton>
          <TickButton
            onTick={onButtonTick('down')}
            className="col-start-2 row-start-2"
            disabled={gameCompleted}
          >
            <MdKeyboardArrowDown />
          </TickButton>
          <TickButton
            onTick={onButtonTick('right')}
            className="col-start-3 row-start-2"
            disabled={gameCompleted}
          >
            <MdKeyboardArrowRight />
          </TickButton>
        </>
      )}
    </div>
  )
}
