import Modal from "../Modal";
import { useGlobalReducer } from "../../../../store/reducers/globalReducer/useGlobalReducer";

export interface GlobalModalType {
  visible: boolean;
  title: string;
  text: string;
}

const GlobalModal = () => {
  const { modal, closeModal } = useGlobalReducer();

  return (
    <Modal 
      title={modal.title} 
      text={modal.text} 
      visible={modal.visible} 
      onCloseModal={closeModal}
    />
  )
}

export default GlobalModal;