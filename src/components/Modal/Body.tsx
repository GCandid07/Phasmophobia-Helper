import { ReactNode } from 'react'

interface ModalBodyProps {
  children: ReactNode
}

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => (
  <div className="max-h-[80vh] overflow-y-auto p-6">{children}</div>
)

ModalBody.displayName = 'Modal.Body'

export default ModalBody
