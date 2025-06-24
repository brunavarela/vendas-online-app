import axios, { AxiosRequestConfig } from "axios";
import { MethodEnum } from "../../../enums/methods.enum";
import { getAuthorizationToken } from "./auth";
import { ERROR_ACCESS_DENIED, ERROR_CONNECTION } from "../../constants/errorsConstants";

export type MethodType = 'get' | 'delete' | 'post' | 'put' | 'patch' ; 

// O 'B' é o body que pode ser passado ou não
export default class ConnectionAPI {
  static async call<T, B = unknown>(url: string, method: MethodType, body?: B): Promise<T> {
    const token = await getAuthorizationToken();
    
    // Assim todas as requisições vão enviar o token junto
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    };

    switch (method) {
      case MethodEnum.DELETE:
      case MethodEnum.GET:
        // O retorno do meu back no ponto data vai ser do tipo T,
        // Ou seja, quando eu chamar o connetion a função vai
        // vai considerar o tipo que eu chamar.
        // EX: const x = ConnectionAPI.call<string>
        return (
          await axios[method]<T>(url, config)
        ).data;

      // Nesses casos além da url, preciso do body
      case MethodEnum.POST:
      case MethodEnum.PUT:
      case MethodEnum.PATCH:
      default:
        return (
          await axios[method]<T>(url, body, config)
        ).data;
    };
  };

  static async connect<T, B = unknown>(
    url: string, 
    method: MethodType, 
    body?: B,
  ): Promise<T> {
    return this.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_ACCESS_DENIED);          
          default:
            throw new Error(ERROR_CONNECTION);
        }
      };
      throw new Error(ERROR_CONNECTION);
    });
  };
};

export const ConnectionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.GET);
};

export const ConnectionAPIDelete = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.DELETE);
};

export const ConnectionAPIPost = async <T, B = unknown>(url: string, body: B): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.POST, body);
};

export const ConnectionAPIPut = async <T, B = unknown>(url: string, body: B): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PUT, body);
};

export const ConnectionAPIPatch = async <T, B = unknown>(url: string, body: B): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PATCH, body);
};