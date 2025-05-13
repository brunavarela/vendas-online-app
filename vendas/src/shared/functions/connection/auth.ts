import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { AUTHORIZATION_KEY } from "../../constants/authorizationConstants";
import { getItemStorage, removeItemStorage, setItemStorage } from "../storageProxy";
import { MenuUrl } from "../../enums/MenuUrl.enum";

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = async (token: string) => setItemStorage(AUTHORIZATION_KEY, token);

export const getAuthorizationToken = async () => getItemStorage(AUTHORIZATION_KEY);

export const logout = (navigate: NavigationProp<ParamListBase>) => {
  // tirar o token do usuário no logout
  unsetAuthorizationToken();

  // mandar pra tela de login
  navigate.reset({
    index: 0,
    routes: [{ name: MenuUrl.LOGIN }],
  });

}