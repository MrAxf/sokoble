import { motion } from 'framer-motion'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
  MdReplay,
  MdUndo,
} from 'react-icons/md'

import tailwindData from '../utils/tailwindData'

const moveAnimation = {
  x: [0, 1, 1, 1],
  opacity: [1, 1, 1, 0],
}
const transition = {
  repeat: Infinity,
  duration: 3,
}

const boxColors = {
  outer: {
    primary: tailwindData.theme.colors['box'].primary,
    success: tailwindData.theme.colors['box'].success.primary,
  },
  inner: {
    primary: tailwindData.theme.colors['box'].secondary,
    success: tailwindData.theme.colors['box'].success.secondary,
  },
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'help'])),
    },
  }
}

export default function Help() {
  const { t } = useTranslation('help')

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between content-center my-4">
        <p>{t('this is the player')}.</p>
        <svg
          width={1}
          height={1}
          viewBox="0 0 1 1"
          className="w-[2rem] h-[2rem]"
        >
          <circle
            style={{ fill: tailwindData.theme.colors['player'] }}
            r="0.5"
            cx={0.5}
            cy={0.5}
          />
        </svg>
      </div>
      <div className="flex flex-row justify-between content-center my-4">
        <p>{t('this is a box')}.</p>
        <svg
          width={1}
          height={1}
          viewBox="0 0 1 1"
          className="w-[2rem] h-[2rem]"
        >
          <g>
            <rect
              width="1"
              height="1"
              rx="0.3"
              ry="0.3"
              x="0"
              y="0"
              fill={tailwindData.theme.colors['box'].primary}
            ></rect>
            <rect
              width="0.5"
              height="0.5"
              rx="0.15"
              ry="0.15"
              x="0.25"
              y="0.25"
              fill={tailwindData.theme.colors['box'].secondary}
            ></rect>
          </g>
        </svg>
      </div>
      <div className="flex flex-row justify-between content-center my-4">
        <p>{t('move the player using the arrow buttons')}.</p>
        <span className="ml-3">
          <MdKeyboardArrowUp className="inline-block w-[30px] h-[30px]" />
          <MdKeyboardArrowLeft className="inline-block w-[30px] h-[30px]" />
          <MdKeyboardArrowDown className="inline-block w-[30px] h-[30px]" />
          <MdKeyboardArrowRight className="inline-block w-[30px] h-[30px]" />
        </span>
      </div>
      <div className="flex flex-row justify-between content-center my-4">
        <p>{t('push the boxes towards the buttons to win')}.</p>
        <svg
          width={1}
          height={1}
          viewBox="0 0 3 1"
          className="w-[6rem] h-[2rem] ml-3"
        >
          <rect
            width="3"
            height="1"
            x="0"
            y="0"
            fill={tailwindData.theme.colors['primary'].light}
          />
          <circle cx={2.5} cy={0.5} r="0.25" style={{ fill: 'white' }} />
          <motion.circle
            style={{ fill: tailwindData.theme.colors['player'] }}
            r="0.5"
            cx={0.5}
            cy={0.5}
            animate={moveAnimation}
            transition={transition}
          />
          <motion.g animate={moveAnimation} transition={transition}>
            <motion.rect
              width="1"
              height="1"
              rx="0.3"
              ry="0.3"
              x="1"
              y="0"
              animate={{
                fill: [
                  boxColors.outer.primary,
                  boxColors.outer.primary,
                  boxColors.outer.success,
                  boxColors.outer.success,
                ],
              }}
              transition={transition}
            />
            <motion.rect
              width="0.5"
              height="0.5"
              rx="0.15"
              ry="0.15"
              x="1.25"
              y="0.25"
              animate={{
                fill: [
                  boxColors.inner.primary,
                  boxColors.inner.primary,
                  boxColors.inner.success,
                  boxColors.inner.success,
                ],
              }}
              transition={transition}
            />
          </motion.g>
        </svg>
      </div>
      <div className="flex flex-row justify-between content-center my-4">
        <p>{t('you can undo your actions pressing the "undo" button')}.</p>
        <span className="ml-3">
          <MdUndo className="inline-block w-[30px] h-[30px]" />
        </span>
      </div>
      <div className="flex flex-row justify-between content-center my-4">
        <p>
          {t('you can restart the game holding down the "restart" button')}.
        </p>
        <span className="ml-3">
          <MdReplay className="inline-block w-[30px] h-[30px]" />
        </span>
      </div>
      <div className="flex flex-row justify-between content-center my-4">
        <p>{t('come back every day to play a new level')}.</p>
      </div>
    </div>
  )
}
