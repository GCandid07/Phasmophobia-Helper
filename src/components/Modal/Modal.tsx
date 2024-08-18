// import { ReactNode, useEffect } from 'react'
// import { createPortal } from 'react-dom'

// interface ModalProps {
//   isOpen: boolean
//   onClose: () => void
//   closeOnBackdropClick?: boolean
//   children: ReactNode
// }

// interface ModalTitleProps {
//   children: ReactNode
//   closeBtn?: boolean
//   onClose?: () => void
// }

// interface ModalBodyProps {
//   children: ReactNode
// }

// interface ModalFooterProps {
//   children: ReactNode
// }

// interface ModalContainerProps extends ModalProps {}

// const Modal = ({
//   isOpen,
//   onClose,
//   closeOnBackdropClick = true,
//   children,
// }: ModalProps) => {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = ''
//     }
//     return () => {
//       document.body.style.overflow = ''
//     }
//   }, [isOpen])

//   if (!isOpen) return null

//   return createPortal(
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
//       onClick={() => closeOnBackdropClick && onClose()}
//     >
//       <div
//         className="mx-4 w-full max-w-lg rounded-lg bg-white shadow-lg sm:mx-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {children}
//       </div>
//     </div>,
//     document.body,
//   )
// }

// const ModalTitle: React.FC<ModalTitleProps> = ({
//   children,
//   closeBtn,
//   onClose,
// }) => (
//   <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
//     <h2 className="text-xl font-semibold">{children}</h2>
//     {closeBtn && onClose && (
//       <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//         &times;
//       </button>
//     )}
//   </div>
// )
// ModalTitle.displayName = 'Modal.Title'
// Modal.Title = ModalTitle

// const ModalBody: React.FC<ModalBodyProps> = ({ children }) => (
//   <div className="max-h-[80vh] overflow-y-auto p-6">{children}</div>
// )
// ModalBody.displayName = 'Modal.Body'
// Modal.Body = ModalBody

// const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => (
//   <div className="flex justify-end border-t border-gray-200 px-6 py-4">
//     {children}
//   </div>
// )
// ModalFooter.displayName = 'Modal.Footer'
// Modal.Footer = ModalFooter

// const ModalContainer: React.FC<ModalContainerProps> = ({
//   isOpen,
//   onClose,
//   closeOnBackdropClick,
//   children,
// }) => (
//   <Modal
//     isOpen={isOpen}
//     onClose={onClose}
//     closeOnBackdropClick={closeOnBackdropClick}
//   >
//     {children}
//   </Modal>
// )
// ModalContainer.displayName = 'Modal.Container'
// Modal.Container = ModalContainer

// export default Modal
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
