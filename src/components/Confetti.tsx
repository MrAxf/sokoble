import ConfettiGenerator from 'confetti-js'
import React, { useEffect, useRef } from 'react'

import createEventEmitter from '../utils/createEventEmitter'
import hexToRgb from '../utils/hexToRgb'
import tailwindData from '../utils/tailwindData'

const confettiOptions = {
  props: [
    'circle',
    'square',
    'triangle',
    { type: 'svg', src: '/images/box.svg', size: 15, weight: 0.2 },
    { type: 'svg', src: '/images/boxSuccess.svg', size: 15, weight: 0.2 },
  ],
  colors: [
    hexToRgb(tailwindData.theme.colors['primary']['main']),
    hexToRgb(tailwindData.theme.colors['primary']['dark']),
    hexToRgb(tailwindData.theme.colors['primary']['light']),
    hexToRgb(tailwindData.theme.colors['secondary']['main']),
    hexToRgb(tailwindData.theme.colors['secondary']['dark']),
    hexToRgb(tailwindData.theme.colors['secondary']['light']),
    hexToRgb(tailwindData.theme.colors['danger']['main']),
    hexToRgb(tailwindData.theme.colors['danger']['dark']),
    hexToRgb(tailwindData.theme.colors['danger']['light']),
    hexToRgb(tailwindData.theme.colors['box']['primary']),
    hexToRgb(tailwindData.theme.colors['box']['secondary']),
    hexToRgb(tailwindData.theme.colors['box']['success']['primary']),
    hexToRgb(tailwindData.theme.colors['box']['success']['secondary']),
    hexToRgb(tailwindData.theme.colors['player'] as string),
  ],
}

const { emit: setConfettiEnabled, observable: confettiSubscriber$ } =
  createEventEmitter<boolean>()

export { setConfettiEnabled }

export default function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const confettiGenerator = useRef<ConfettiGenerator>(null)
  const rendering = useRef<ConfettiGenerator>(false)

  useEffect(() => {
    const subcription = confettiSubscriber$.subscribe((val) => {
      if (val === rendering.current) return
      if (val) {
        confettiGenerator.current = new ConfettiGenerator({
          target: canvasRef.current,
          ...confettiOptions,
        })
        confettiGenerator.current.render()
        console.log('render')
      } else {
        confettiGenerator.current?.clear()
      }
      rendering.current = val
    })

    return () => {
      subcription.unsubscribe()
      confettiGenerator.current?.clear()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-screen h-screen fixed inset-0 -z-[1]"
    ></canvas>
  )
}
