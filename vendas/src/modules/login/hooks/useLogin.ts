import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { ConnectionAPIPost } from "../../../shared/functions/connection/connectionAPI";

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleOnPress = async () => {
    setLoading(true);

    await ConnectionAPIPost('http://10.0.2.2:3001/auth', {
        email,
        password,
      })
      .catch(() => {
        setErrorMessage('Usuário ou senha inválidos');
      });
    setLoading(false);
  };

  const handleOnChangeEmail = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setErrorMessage('')
    setEmail(event.nativeEvent.text);
  }

  const handleOnChangePassword = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setErrorMessage('')
    setPassword(event.nativeEvent.text);
  }

  return {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword
  }
}