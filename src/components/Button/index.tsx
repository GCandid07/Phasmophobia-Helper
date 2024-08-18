export type ButtonProps = {
  children: React.ReactNode
  variant?: 'filled' | 'outline'
  color?: 'primary' | 'secondary' | 'accent' | 'danger' | 'success'
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
  const borderColors = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    accent: 'border-accent',
    danger: 'border-danger',
    success: 'border-success',
  }

  const textColors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    danger: 'text-danger',
    success: 'text-success',
  }

  const bgColors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    danger: 'bg-danger',
    success: 'bg-success',
  }

  const baseStyles =
    'rounded-md px-4 py-2 font-shadow font-bold focus:outline-none'

  const variantStyles = {
    filled: `text-white ${bgColors[color]}`,
    outline: `border-2 ${textColors[color]} ${borderColors[color]}`,
    disabled: 'text-gray-400 bg-disabled border-gray-400 cursor-not-allowed',
  }

  const buttonClasses = [
    disabled ? variantStyles.disabled : `${variantStyles[variant]}`,
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
