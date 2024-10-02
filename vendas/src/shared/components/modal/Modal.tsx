import { useState } from 'react';
import {Alert, ModalProps as ModalPropsReact, Modal as ModalReact, Text, Pressable, View} from 'react-native';

interface ModalProps extends ModalPropsReact {
  title?: string;
  text?: string
}

const Modal = ({title, text, ...props}: ModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ModalReact
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        {...props}
        >
        <View >
          <View >
            <Text>{title}</Text>
            <Text>{text}</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </ModalReact>
  )
}

export default Modal;