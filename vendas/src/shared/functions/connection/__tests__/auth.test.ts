import { AUTHORIZATION_KEY } from "../../../constants/authorizationConstants";
import { MenuUrl } from "../../../enums/MenuUrl.enum";
import { getItemStorage, removeItemStorage, setItemStorage } from "../../storageProxy";
import { getAuthorizationToken, logout, setAuthorizationToken, unsetAuthorizationToken } from "../auth";

jest.mock('../../storageProxy');

// O mock é pra não precisar passar na função,
// nao preciso que entre na função pra testar,
// apenras verificar se ela foi chamada
jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(() => Promise.resolve()),
    getItem: jest.fn(() => Promise.resolve('mockReturn')),
    removeItem: jest.fn(() => Promise.resolve()),
}));

describe('Auth', () => {

    it('should call removeItem in unsetAuthorizationToken', async () => {
        unsetAuthorizationToken();

        expect(removeItemStorage).toHaveBeenCalledWith(AUTHORIZATION_KEY);
    });

    it('should call setItem in setAuthorizationToken', () => {
        const token = 'tokenMock';
        setAuthorizationToken(token);

        expect(setItemStorage).toHaveBeenCalledWith(AUTHORIZATION_KEY, token);
    });

    it('should call getItem in getAuthorizationToken', () => {
        getAuthorizationToken();

        expect(getItemStorage).toHaveBeenCalledWith(AUTHORIZATION_KEY);
    });

    it('should call logout', () => {
        const navigate: any = {
            reset: jest.fn(),
        };

        logout(navigate);

        expect(removeItemStorage).toHaveBeenCalledWith(AUTHORIZATION_KEY);
        expect(navigate.reset).toHaveBeenCalledWith({
            index: 0,
            routes: [{ name: MenuUrl.LOGIN }],
        });

    });
});