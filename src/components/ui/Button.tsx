import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'

interface Buttonprops
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  className?: string
  children: ReactNode
}

export default forwardRef<HTMLButtonElement, Buttonprops>(function Button(
  { className = '', children, ...props },
  ref
) {
  return (
    <button
      {...props}
      ref={ref}
      className={`flex relative flex-row overflow-hidden justify-center items-center place-content-center rounded-md bg-secondary-main text-xl text-white transition hover:bg-secondary-dark disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  )
})
