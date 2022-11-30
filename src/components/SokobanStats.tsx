import React from 'react'
import { useTranslation } from 'react-i18next'
import useSokoban from '../uses/useSokoban'

export default function SokobanStats() {
  const { movements } = useSokoban()
  const { t } = useTranslation('index')

  return (
    <div className="flex flex-grow-0 flex-col text-center">
      <span className="mt-2 text-2xl font-bold">{movements}</span>
    </div>
  )
}
