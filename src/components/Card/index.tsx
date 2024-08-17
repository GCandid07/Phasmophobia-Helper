import React from 'react'

type CardProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  disabled = false,
}) => {
  return (
    <div
      className={`rounded-lg bg-secondary bg-gradient-to-br from-transparent via-secondary to-tertiary p-2 shadow-inset ${className} ${onClick ? 'cursor-pointer' : ''} ${disabled ? 'cursor-not-allowed opacity-40' : 'opacity-100'}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card
