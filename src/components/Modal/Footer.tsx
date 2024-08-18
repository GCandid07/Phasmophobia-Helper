import { ReactNode } from 'react'
import ModalButton from './Button'

interface ModalFooterProps {
  children: ReactNode
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => (
  <div className="flex justify-end border-t border-current-dark px-6 py-4">
    {children}
  </div>
)

ModalFooter.displayName = 'Modal.Footer'

export { ModalFooter, ModalButton }
