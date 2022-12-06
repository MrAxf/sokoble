import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
  MdReplay,
  MdUndo,
} from 'react-icons/md'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

import useSokoban from '../uses/useSokoban'
import HoldButton from './HoldButton'
import TickButton from './TickButton'

const shareButtonprops = {
  url: 'https://sokoble.axford.dev',
  resetButtonStyle: false,
  className:
    'grid place-content-center rounded-md bg-secondary-main text-xl text-white transition hover:bg-secondary-dark disabled:opacity-50',
}

function ShareButtons({ movements }: { movements: number }) {
  const { t } = useTranslation('index')
  return (
    <motion.div
      key="ShareButtons"
      className="grid max-h-[250px] flex-grow grid-cols-3 grid-rows-2 gap-2 p-2 pb-14"
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      transition={{
        duration: 2,
      }}
    >
      <span className="col-span-3 text-3xl font-bold text-center grid place-items-center">
        {t('level completed')}
      </span>
      <TwitterShareButton
        {...shareButtonprops}
        title={`${t('share message 1')} ${movements} ${t('share message 2')}.`}
      >
        <TwitterIcon bgStyle={{ fill: 'transparent' }} size={40} />
      </TwitterShareButton>
      <FacebookShareButton
        {...shareButtonprops}
        quote={`${t('share message 1')} ${movements} ${t('share message 2')}.`}
      >
        <FacebookIcon bgStyle={{ fill: 'transparent' }} size={40} />
      </FacebookShareButton>
      <WhatsappShareButton
        {...shareButtonprops}
        title={`${t('share message 1')} ${movements} ${t('share message 2')}.`}
      >
        <WhatsappIcon bgStyle={{ fill: 'transparent' }} size={40} />
      </WhatsappShareButton>
    </motion.div>
  )
}

function PlayButtons({
  disabled,
  undo,
  reset,
  onButtonTick,
}: {
  disabled: boolean
  undo: () => void
  reset: () => void
  onButtonTick: (direction: Direction) => () => void
}) {
  const { t } = useTranslation('index')
  return (
    <motion.div
      key="PlayButtons"
      className="grid max-h-[250px] flex-grow grid-cols-3 grid-rows-2 gap-2 p-2 pb-14"
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      transition={{
        duration: 2,
      }}
    >
      <TickButton
        onTick={undo}
        className="col-start-1 row-start-1"
        disabled={disabled}
      >
        <MdUndo />
      </TickButton>
      <TickButton
        onTick={onButtonTick('up')}
        className="col-start-2 row-start-1"
        disabled={disabled}
      >
        <MdKeyboardArrowUp />
      </TickButton>
      <HoldButton
        onHoldEnded={reset}
        className="col-start-3 row-start-1"
        disabled={disabled}
      >
        <MdReplay />
      </HoldButton>
      <TickButton
        onTick={onButtonTick('left')}
        className="col-start-1 row-start-2"
        disabled={disabled}
      >
        <MdKeyboardArrowLeft />
      </TickButton>
      <TickButton
        onTick={onButtonTick('down')}
        className="col-start-2 row-start-2"
        disabled={disabled}
      >
        <MdKeyboardArrowDown />
      </TickButton>
      <TickButton
        onTick={onButtonTick('right')}
        className="col-start-3 row-start-2"
        disabled={disabled}
      >
        <MdKeyboardArrowRight />
      </TickButton>
    </motion.div>
  )
}

export default function SokobanControls() {
  const { movePlayer, undo, reset, movements, gameCompleted } = useSokoban()

  const onButtonTick = (direction: Direction) => () => {
    movePlayer(direction)
  }

  return (
    <AnimatePresence initial={false} mode="wait">
      {gameCompleted ? (
        <ShareButtons movements={movements} />
      ) : (
        <PlayButtons
          disabled={gameCompleted}
          undo={undo}
          reset={reset}
          onButtonTick={onButtonTick}
        />
      )}
    </AnimatePresence>
  )
}
