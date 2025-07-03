import { FlatList, Modal as MenuModalReact, Pressable } from "react-native"
import Text from "../../text/Text";
import { textTypes } from "../../text/textTypes";
import { ContainerMenuModal } from "./menuModal.style";
import { IconCloseModal } from "../generalModal/modal.style";

interface MenuModalProps {
    visible: boolean;
    onCloseMenuModal: () => void;
    categories: { id: string; name: string }[];
    onSelect: (categoryId: string) => void;
}

const MenuModal = ({ visible, onCloseMenuModal, categories, onSelect }: MenuModalProps) => {
    return(
        <MenuModalReact
            visible={visible} 
            transparent={true}
            animationType="none"
        >
            <ContainerMenuModal>
                <FlatList 
                    data={categories}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <Pressable
                            style={{ paddingVertical: 12 }}
                            onPress={() => {
                                onSelect(item.id);
                                onCloseMenuModal();
                            }}
                        >
                            <Text type={textTypes.PARAGRAPH_SEMIBOLD}>{item.name}</Text>
                        </Pressable>
                    )}
                />
            </ContainerMenuModal>
            <IconCloseModal onPress={onCloseMenuModal} name="cross" size={12}/>
        </MenuModalReact>
    );
};

export default MenuModal;