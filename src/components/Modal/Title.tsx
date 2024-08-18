import { ReactNode } from 'react'
import { Close } from '../UI/Icons/Close'

interface ModalTitleProps {
  children: ReactNode
  closeBtn?: boolean
  onClose?: () => void
  className?: string
}

const ModalTitle: React.FC<ModalTitleProps> = ({
  children,
  closeBtn,
  onClose,
  className,
}) => (
  <div className="flex items-center justify-between border-b border-current-dark px-6 py-4 text-accent">
    <h2 className={`font-semibold ${className}`}>{children}</h2>
    {closeBtn && onClose && (
      <button onClick={onClose}>
        <Close className="fill-accent" />
      </button>
    )}
  </div>
)

ModalTitle.displayName = 'Modal.Title'

export default ModalTitle
