import { KeyboardEvent, ReactNode, useEffect, useRef } from 'react'

import useSokoban from '../uses/useSokoban'

type SokobanContainerProps = {
  children: ReactNode
}

export default function SokobanContainer({ children }: SokobanContainerProps) {
  const container = useRef<HTMLDivElement | null>(null)
  const { movePlayer } = useSokoban()

  const onContainerKeyDown = (evt: KeyboardEvent<HTMLDivElement>) => {
    const direction = {
      ArrowUp: 'up',
      ArrowDown: 'down',
      ArrowLeft: 'left',
      ArrowRight: 'right',
    }[evt.key]

    if (direction) movePlayer(direction as Direction)
  }

  useEffect(() => {
    if (container.current) container.current.focus()
  }, [container])

  return (
    <div
      tabIndex={0}
      className="h-full p-5 flex flex-col"
      ref={container}
      onKeyDown={onContainerKeyDown}
    >
      {children}
    </div>
  )
}
