import { useEffect, useState } from "react"
import { CreateUserType } from "../../../shared/types/createUserType";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRequest } from "../../../shared/hooks/useRequest";
import { MethodEnum } from "../../../enums/methods.enum";
import { URL_USER } from "../../../shared/constants/urls";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { validateCpf } from "../../../shared/functions/cpf";
import { validatePhone } from "../../../shared/functions/phone";
import { validateEmail } from "../../../shared/functions/email";
import { removeSpecialCharacters } from "../../../shared/functions/characters";

export const DEFAULT_CREATE_USER = {
    name: '',
    phone: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
};

export const useCreateUser = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { request, loading } = useRequest();
    const [disabled, setDisabled ] = useState<boolean>(true);
    const [createUser, setCreateUser] = useState<CreateUserType>(DEFAULT_CREATE_USER);

    useEffect(() => {
        if (
            createUser.name !== '' &&
            validatePhone(createUser.phone) &&
            validateEmail(createUser.email) &&
            validateCpf(createUser.cpf) &&
            createUser.password !== '' &&
            createUser.password === createUser.confirmPassword
        ) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [createUser]);

    const handleCreateUser = async () => {
        const resultCreateUser = await request({
            url: URL_USER,
            method: MethodEnum.POST,
            body: {
                ...createUser,
                phone: removeSpecialCharacters(createUser.phone),
                cpf: removeSpecialCharacters(createUser.cpf)
            },
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
            [name]: event.nativeEvent.text,
        }));
    };

    return {
        createUser,
        loading,
        disabled,
        handleOnChangeInput,
        handleCreateUser
    };
}   