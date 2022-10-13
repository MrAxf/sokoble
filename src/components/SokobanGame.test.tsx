import { cleanup, render, screen } from '@testing-library/react'
import { afterAll, describe, expect, test } from 'vitest'

import SokobanGame from './SokobanGame'

describe('SokobanBoard', () => {
  afterAll(cleanup)

  test('Should component render the board', async () => {
    render(
      <SokobanGame
        board={{
          board: [
            ['FREE', 'FREE'],
            ['BLOCK', 'BUTTON'],
          ],
          player: { x: 0, y: 0 },
          boxes: [{ x: 1, y: 0 }],
        }}
      />
    )

    const cells = await screen.findAllByRole('cell')
    expect(cells.length).toBe(4)
  })
})
