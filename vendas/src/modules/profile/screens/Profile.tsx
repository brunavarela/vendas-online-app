import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import Button from "../../../shared/components/button/Button";
import Text from "../../../shared/components/text/Text"
import { logout } from "../../../shared/functions/connection/auth";

const Profile = () => {
    const navigate = useNavigation<NavigationProp<ParamListBase>>();

    return (
        <>
            <Text>Perfil</Text>
            <Button title='Sair' onPress={() => logout(navigate)} />
        </>
    );
};

export default Profile;