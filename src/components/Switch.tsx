import { InputHTMLAttributes, forwardRef, useId } from 'react'

import styles from './Switch.module.css'

interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { label, ...rest },
  ref
) {
  const id = useId()

  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-center ${styles.switch}`}
    >
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          className="sr-only"
          ref={ref}
          {...rest}
        />
        <div className="block h-8 w-14 rounded-full bg-gray-600"></div>
        <div
          className={`${styles.dot} absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition`}
        ></div>
      </div>
      <div className="ml-3 flex-grow text-right">{label}</div>
    </label>
  )
})

export default Switch
