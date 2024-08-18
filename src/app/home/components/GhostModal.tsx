import {
  ModalBody,
  ModalButton,
  ModalContainer,
  ModalFooter,
  ModalTitle,
} from '@/components/Modal'
import React from 'react'
import { GhosModalProps } from '../types'

const GhostModal: React.FC<GhosModalProps> = ({
  isModalOpen,
  closeModal,
  ghost,
}) => {
  return (
    <ModalContainer isOpen={isModalOpen} onClose={closeModal}>
      <ModalTitle className="font-ghost text-4xl" closeBtn onClose={closeModal}>
        {ghost?.name || ''}
      </ModalTitle>
      <ModalBody>
        <p>Conteúdo aqui . . .</p>
      </ModalBody>
      <ModalFooter>
        <ModalButton
          className="mr-2"
          variant="outline"
          color="accent"
          onClick={closeModal}
        >
          Fechar
        </ModalButton>
      </ModalFooter>
    </ModalContainer>
  )
}

export default GhostModal
