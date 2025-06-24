import { getItemStorage, removeItemStorage, setItemStorage } from "../storageProxy";
import AsyncStorage from '@react-native-async-storage/async-storage';

const mockReturn = 'abc';
const mockKey = 'key';

//Quando eu chamar essa função, o que deve me retornar de dentro dessa lib?
// Ela vai retornar tudo o que está no setItem
jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(() => Promise.resolve()),
    getItem: jest.fn(() => Promise.resolve(mockReturn)),
    removeItem: jest.fn(() => Promise.resolve()),
}));

describe('StorageProxy', () => {

    it('should set item in storage', () => {
        setItemStorage(mockKey, 'value');

        expect(AsyncStorage.setItem).toHaveBeenCalledWith(mockKey, 'value');
    });

    it('should return item in storage', async () => {
        const returnProxy =  await getItemStorage(mockKey)

        expect(returnProxy).toEqual(mockReturn);
    });

    it('should call remove item in storage', async () => {
        removeItemStorage(mockKey);

        expect(AsyncStorage.removeItem).toHaveBeenCalledWith(mockKey);
    });
});
