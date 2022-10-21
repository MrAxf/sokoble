import { MouseEvent } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp, MdUndo } from 'react-icons/md'

import useSokoban from '../uses/useSokoban'

export default function SokobanControls() {
  const { movePlayer, undo } = useSokoban()

  const onDirectionButtonClick = (direction: Direction) => (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if(evt.button === 0) movePlayer(direction)
  }

  return (
    <div className="flex-grow grid max-h-[250px] grid-cols-3 grid-rows-2 gap-2 p-2">
      <button
        className="grid rounded-md text-xl place-content-center row-start-1 col-start-1 bg-green-500 hover:bg-green-700 transition text-white"
        onClick={undo}
      >
        <MdUndo />
      </button>
      <button
        className="grid rounded-md text-xl place-content-center row-start-1 col-start-2 bg-green-500 hover:bg-green-700 transition text-white"
        onClick={onDirectionButtonClick('up')}
      >
        <MdKeyboardArrowUp />
      </button>
      <button
        className="grid rounded-md text-xl place-content-center row-start-2 col-start-1 bg-green-500 hover:bg-green-700 transition text-white"
        onClick={onDirectionButtonClick('left')}
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        className="grid rounded-md text-xl place-content-center row-start-2 col-start-2 bg-green-500 hover:bg-green-700 transition text-white"
        onClick={onDirectionButtonClick('down')}
      >
        <MdKeyboardArrowDown />
      </button>
      <button
        className="grid rounded-md text-xl place-content-center row-start-2 col-start-3 bg-green-500 hover:bg-green-700 transition text-white"
        onClick={onDirectionButtonClick('right')}
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  )
}
