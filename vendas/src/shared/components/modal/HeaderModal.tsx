import { FlatList, Modal as ModalHeader, Pressable, TouchableWithoutFeedback, View } from "react-native"
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";

interface HeaderModalProps {
    visible: boolean;
    onClose: () => void;
    categories: { id: string; name: string }[];
    onSelect: (categoryId: string) => void;
}

const HeaderModal = ({ visible, onClose, categories, onSelect }: HeaderModalProps) => {
    return(
        <ModalHeader
            visible={visible} 
            transparent 
            animationType="fade"
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View>
                    <FlatList 
                        data={categories}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <Pressable
                                style={{ paddingVertical: 12 }}
                                onPress={() => {
                                    onSelect(item.id);
                                    onClose();
                                }}
                            >
                                <Text type={textTypes.PARAGRAPH_SEMIBOLD}>{item.name}</Text>
                            </Pressable>
                        )}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ModalHeader>
    );
};

export default HeaderModal;