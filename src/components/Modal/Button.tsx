import Button, { ButtonProps } from '../Button'

interface ModalButtonProps extends ButtonProps {}

const ModalButton: React.FC<ModalButtonProps> = (props) => {
  return <Button {...props} />
}

ModalButton.displayName = 'Modal.Button'

export default ModalButton
