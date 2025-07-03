import { ModalProps as ModalPropsReact, Modal as ModalReact} from 'react-native';
import { ContainerModal, IconCloseModal } from './modal.style';
import Text from '../../text/Text';
import { theme } from '../../../themes/theme';
import { textTypes } from '../../text/textTypes';
import Button from '../../button/Button';
import { modalTestId } from '../__mocks__/modal.testid';

interface ModalProps extends ModalPropsReact {
  title?: string;
  text?: string;
  onCloseModal: () => void
}

const Modal = ({title, text, onCloseModal, ...props}: ModalProps) => {

  return (
    <ModalReact
      animationType="slide"
      transparent={true}
      onRequestClose={onCloseModal}
      {...props}
    >
      <ContainerModal>
        <Text 
          testID={modalTestId.MODAL_TITLE}
          type={textTypes.BUTTON_SEMIBOLD} 
          color={theme.colors.mainTheme.primary} 
        >
          {title}
        </Text>
        <Text testID={modalTestId.MODAL_TEXT}>
          {text}
        </Text>
        <Button testID={modalTestId.MODAL_CLOSE_BUTTON} title='ok' onPress={onCloseModal} />
        <IconCloseModal testID={modalTestId.MODAL_CLOSE_ICON} onPress={onCloseModal} name="cross" size={12}/>
      </ContainerModal>
    </ModalReact>
  )
}

export default Modal;