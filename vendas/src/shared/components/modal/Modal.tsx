import {Alert, ModalProps as ModalPropsReact, Modal as ModalReact} from 'react-native';
import { ContainerModal, IconCloseModal } from './modal.style';
import Text from '../text/Text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';
import Button from '../button/Button';

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
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onCloseModal();
      }}
      {...props}
    >
      <ContainerModal>
        <Text 
          type={textTypes.BUTTON_SEMIBOLD} 
          color={theme.colors.mainTheme.primary} 
        >
          {title}
        </Text>
        <Text>
          {text}
        </Text>
        <Text>
          {text}
        </Text>
        <Button title='ok' onPress={onCloseModal} />
        <IconCloseModal onPress={onCloseModal} name="cross" size={12}/>
      </ContainerModal>
    </ModalReact>
  )
}

export default Modal;