import { MouseEvent } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md'

import useSokoban from '../uses/useSokoban'

export default function SokobanControls() {
  const { movePlayer } = useSokoban()

  const onDirectionButtonClick = (direction: Direction) => (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if(evt.button === 0) movePlayer(direction)
  }

  return (
    <div className="flex-grow grid grid-cols-3 grid-rows-3 gap-2 p-2">
      <button
        className="grid rounded-md text-xl place-content-center row-start-1 col-start-2 bg-green-500 hover:bg-green-700 transition text-white"
        onMouseDown={onDirectionButtonClick('up')}
      >
        <MdKeyboardArrowUp />
      </button>
      <button
        className="grid rounded-md text-xl place-content-center row-start-2 col-start-1 bg-green-500 hover:bg-green-700 transition text-white"
        onMouseDown={onDirectionButtonClick('left')}
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        className="grid rounded-md text-xl place-content-center row-start-2 col-start-3 bg-green-500 hover:bg-green-700 transition text-white"
        onMouseDown={onDirectionButtonClick('right')}
      >
        <MdKeyboardArrowRight />
      </button>
      <button
        className="grid rounded-md text-xl place-content-center row-start-3 col-start-2 bg-green-500 hover:bg-green-700 transition text-white"
        onMouseDown={onDirectionButtonClick('down')}
      >
        <MdKeyboardArrowDown />
      </button>
    </div>
  )
}
