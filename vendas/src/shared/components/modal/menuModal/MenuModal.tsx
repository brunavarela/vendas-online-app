import { FlatList, Modal as MenuModalReact, Pressable, TouchableOpacity } from "react-native"
import Text from "../../text/Text";
import { textTypes } from "../../text/textTypes";
import { ContainerMenuModal, ListContent, ViewCloseMenuModal } from "./menuModal.style";
import { IconCloseModal } from "../generalModal/modal.style";
import { theme } from "../../../themes/theme";

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
                            <ListContent>
                                <Text type={textTypes.PARAGRAPH_SEMIBOLD}>{item.name}</Text>
                            </ListContent>
                        </Pressable>
                    )}
                />
            </ContainerMenuModal>
            <ViewCloseMenuModal>
                <IconCloseModal color={theme.colors.mainTheme.primary} onPress={onCloseMenuModal} name="cross" size={16}/>
            </ViewCloseMenuModal>
        </MenuModalReact>
    );
};

export default MenuModal;