import { useTheme } from 'next-themes'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import getLevel from '../services/getLevel'
import currentBoard from '../store/currentBoard'
import tailwindData from '../utils/tailwindData'

export default function CurrentSokobanBoard() {
  const [, setCurrentBoard] = useRecoilState(currentBoard)
  const { theme } = useTheme()

  useEffect(() => {
    ;(async () => {
      const board = await getLevel()
      setCurrentBoard(board)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Head>
      <meta
        name="theme-color"
        content={
          theme === 'dark'
            ? tailwindData.theme.colors['slate']['900']
            : tailwindData.theme.colors['slate']['200']
        }
      />
    </Head>
  )
}
