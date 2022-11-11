import { KeyboardEvent, ReactNode, useEffect, useRef } from 'react'

import useSokoban from '../uses/useSokoban'

type SokobanContainerProps = {
  children: ReactNode
}

export default function SokobanContainer({ children }: SokobanContainerProps) {
  const container = useRef<HTMLDivElement | null>(null)
  const { movePlayer, undo, gameCompleted } = useSokoban()

  const onContainerKeyDown = (evt: KeyboardEvent<HTMLDivElement>) => {
    evt.preventDefault()
    if (gameCompleted) return
    else if (evt.ctrlKey && evt.key === 'z') {
      undo()
    } else {
      const direction = {
        ArrowUp: 'up',
        w: 'up',
        ArrowDown: 'down',
        s: 'down',
        ArrowLeft: 'left',
        a: 'left',
        ArrowRight: 'right',
        d: 'right',
      }[evt.key]

      if (direction) movePlayer(direction as Direction)
    }
  }

  useEffect(() => {
    if (container.current) container.current.focus()
  }, [container])

  return (
    <div
      tabIndex={0}
      className="h-full flex flex-col focus-visible:outline-0"
      ref={container}
      onKeyDown={onContainerKeyDown}
    >
      {children}
    </div>
  )
}
