import { ReactNode } from 'react'
import Modal from './Modal'

interface ModalContainerProps {
  isOpen: boolean
  onClose: () => void
  closeOnBackdropClick?: boolean
  children: ReactNode
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  onClose,
  closeOnBackdropClick,
  children,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    closeOnBackdropClick={closeOnBackdropClick}
  >
    {children}
  </Modal>
)

ModalContainer.displayName = 'Modal.Container'

export default ModalContainer
