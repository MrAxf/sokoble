import React from 'react'
import { useTranslation } from 'react-i18next'
import useSokoban from '../uses/useSokoban'

export default function SokobanStats() {
  const { movements, gameCompleted } = useSokoban()
  const { t } = useTranslation('index')

  return (
    <div className="flex flex-grow-0 flex-col text-center">
      <span className="mt-2 text-2xl font-bold">{movements}</span>
      <span className="my-2 h-[36px] text-3xl font-bold">
        {gameCompleted && t("level completed")}
      </span>
    </div>
  )
}
