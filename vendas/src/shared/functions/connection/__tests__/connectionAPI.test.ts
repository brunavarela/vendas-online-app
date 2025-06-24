import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import { URL_CART } from "../../../constants/urls";
import { ConnectionAPIDelete, ConnectionAPIGet, ConnectionAPIPatch, ConnectionAPIPost, ConnectionAPIPut } from "../connectionAPI";

const mockAxios = new MockAdapter(axios);
const mockReturnValue = 'mockReturnValue';
const mockToken = 'TOKEN_MOCK';
const mockBody = { name: 'test' };

jest.mock('../auth', () => ({
    getAuthorizationToken: () => mockToken,
}));

describe('ConnectionAPI', () => {

    describe('connectionAPIGet', () => {

        it('should success get', async () => {
            const spyAxios = jest.spyOn(axios, 'get');
            mockAxios.onGet(URL_CART).reply(200, mockReturnValue);
            
            const returnGet = await ConnectionAPIGet(URL_CART);

            expect(returnGet).toEqual(mockReturnValue);
            expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
        });
    });

    describe('connectionAPIDelete', () => {

        it('should success delete', async () => {
            const spyAxios = jest.spyOn(axios, 'delete');
            mockAxios.onDelete(URL_CART).reply(200, mockReturnValue);
            
            const returnDelete = await ConnectionAPIDelete(URL_CART);

            expect(returnDelete).toEqual(mockReturnValue);
            expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
        });
    });

    describe('connectionAPIPost', () => {

        it('should success post', async () => {
            const spyAxios = jest.spyOn(axios, 'post');
            mockAxios.onPost(URL_CART).reply(200, mockReturnValue);
            
            const returnPost = await ConnectionAPIPost(URL_CART, mockBody);

            expect(returnPost).toEqual(mockReturnValue);
            expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
            expect(spyAxios.mock.calls[0][1]).toEqual(mockBody);
        });
    });

    describe('connectionAPIPut', () => {

        it('should success Put', async () => {
            const spyAxios = jest.spyOn(axios, 'put');
            mockAxios.onPut(URL_CART).reply(200, mockReturnValue);
            
            const returnPut = await ConnectionAPIPut(URL_CART, mockBody);

            expect(returnPut).toEqual(mockReturnValue);
            expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
            expect(spyAxios.mock.calls[0][1]).toEqual(mockBody);
        });
    });
    
    describe('connectionAPIPatch', () => {

        it('should success Patch', async () => {
            const spyAxios = jest.spyOn(axios, 'patch');
            mockAxios.onPatch(URL_CART).reply(200, mockReturnValue);
            
            const returnPatch = await ConnectionAPIPatch(URL_CART, mockBody);

            expect(returnPatch).toEqual(mockReturnValue);
            expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
            expect(spyAxios.mock.calls[0][1]).toEqual(mockBody);
        });
    });
});