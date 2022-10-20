import { InputHTMLAttributes, forwardRef, useId } from 'react'
import styles from './Switch.module.css'

interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, ...rest }, ref) => {

    const id = useId()

    return (
      <label htmlFor={id} className={`flex items-center cursor-pointer ${styles.switch}`}>
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            className="sr-only"
            ref={ref}
            {...rest}
          />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className={`${styles.dot} absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition`}></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">{label}</div>
      </label>
    )
  }
)

export default Switch
