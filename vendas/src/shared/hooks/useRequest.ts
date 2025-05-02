import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import { ConnectionAPIPost } from "../functions/connection/connectionAPI";
import { UserType } from "../types/userType";
import { ReturnLogin } from "../types/returnLogin";

export const useRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [user, setUser] = useState<UserType>();

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await ConnectionAPIPost<ReturnLogin>('http://10.0.2.2:3001/auth', body)
      .then((result) => {
        setUser(result.user);
      })
      .catch(() => {
        setErrorMessage('Usuário ou senha inválidos');
      });
    setLoading(false);
  }

  return {
    loading,
    user,
    errorMessage,
    authRequest,
    setErrorMessage,
  }
}
