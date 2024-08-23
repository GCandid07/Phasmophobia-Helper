import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  closeOnBackdropClick?: boolean
  children: ReactNode
}

const Modal = ({
  isOpen,
  onClose,
  closeOnBackdropClick = true,
  children,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      onClick={() => closeOnBackdropClick && onClose()}
    >
      <div
        className="mx-4 w-full max-w-lg rounded-lg bg-secondary text-white shadow-lg sm:mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}

export default Modal
