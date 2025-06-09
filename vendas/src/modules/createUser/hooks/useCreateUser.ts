import { useState } from "react"
import { CreateUserType } from "../../../shared/types/createUserType";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRequest } from "../../../shared/hooks/useRequest";
import { MethodEnum } from "../../../enums/methods.enum";
import { URL_USER } from "../../../shared/constants/urls";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";

export const useCreateUser = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { request, loading } = useRequest();
    const [createUser, setCreateUser] = useState<CreateUserType>({
        name: '',
        phone: '',
        email: '',
        cpf: '',
        password: '',
        confirmPassword: '',
    });

    const handleCreateUser = async () => {
        const resultCreateUser = await request({
            url: URL_USER,
            method: MethodEnum.POST,
            body: createUser,
            message: 'Usuário cadastrado com sucesso!'
        });

        if (resultCreateUser) {
            reset({
                index: 0,
                routes: [{ name: MenuUrl.LOGIN }],
            });
        };
    };

    const handleOnChangeInput = (
        event: NativeSyntheticEvent<TextInputChangeEventData>, 
        name: string
    ) => {
        setCreateUser((currentCreateUser) => ({
            ...currentCreateUser,
            [name]: event.nativeEvent.text
        }));
    };

    return {
        createUser,
        loading,
        handleOnChangeInput,
        handleCreateUser
    };
}   