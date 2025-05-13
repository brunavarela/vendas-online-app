import axios from "axios";
import { MethodEnum } from "../../../enums/methods.enum";

export type MethodType = 'get' | 'delete' | 'post' | 'put' | 'patch' ; 

export default class ConnectionAPI {
  static async call<T>(
    url: string, 
    method: MethodType, 
    body?: unknown
  ): Promise<T> {
    switch (method) {
      case MethodEnum.DELETE:
      case MethodEnum.GET:
        // O retorno do meu back no ponto data vai ser do tipo T,
        // Ou seja, quando eu chamar o connetion a função vai
        // vai considerar o tipo que eu chamar.
        // EX: const x = ConnectionAPI.call<string>
        return (
          await axios[method]<T>(url)
        ).data;

      // Nesses casos além da url, preciso do body
      case MethodEnum.POST:
      case MethodEnum.PUT:
      case MethodEnum.PATCH:
      default:
        return (
          await axios[method]<T>(url, body)
        ).data;
    }
  }

  static async connect<T>(
    url: string, 
    method: MethodType, 
    body?: unknown
  ): Promise<T> {
    return this.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error('Sem permissão');          
          default:
            throw new Error('Sem conexão com o backend');
        }
      };
      throw new Error('Sem conexão com o backend');
    });
  }
}

export const ConnectionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.GET);
};

export const ConnectionAPIDelete = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.DELETE);
};

export const ConnectionAPIPost = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.POST, body);
};

export const ConnectionAPIPut = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PUT, body);
};

export const ConnectionAPIPatch = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PATCH, body);
};