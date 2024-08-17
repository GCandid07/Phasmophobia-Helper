type ButtonProps = {
  children: React.ReactNode
  variant?: 'filled' | 'outline'
  color?: 'primary' | 'secondary' | 'accent'
  className?: string
  disabled?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  color = 'primary',
  className = '',
  disabled = false,
  ...rest
}) => {
  const baseStyles =
    'rounded-md px-4 py-2 font-shadow font-bold focus:outline-none'

  const variantStyles = {
    filled: 'text-surface',
    outline: `border-2 text-${color} border-${color}`,
    disabled: 'text-gray-400 bg-disabled border-gray-400 cursor-not-allowed',
  }

  const colorStyles =
    variant !== 'outline' ? `bg-${color} text-surface` : `text-${color}`

  const buttonClasses = [
    disabled
      ? variantStyles.disabled
      : `${variantStyles[variant]} ${colorStyles}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={`${baseStyles} ${buttonClasses}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
