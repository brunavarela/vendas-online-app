import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useState } from "react"

import { RequestLogin } from "../types/requestLogin";
import { ConnectionAPIPost } from "../functions/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { useUserReducer } from "../../store/reducers/userReducer/useUserReducer";
import { useGlobalReducer } from "../../store/reducers/globalReducer/useGlobalReducer";

export const useRequest = () => {
  const { navigate }  = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await ConnectionAPIPost<ReturnLogin>('http://10.0.2.2:3001/auth', body)
      .then((result) => {
        setUser(result.user);
        navigate('Home');
      })
      .catch(() => {
        setModal({
          visible: true,
          title: 'Erro',
          text: 'Usuário ou senha inválidos'
        })
      });
    setLoading(false);
  }

  return {
    loading,
    errorMessage,
    authRequest,
    setErrorMessage,
  }
}
