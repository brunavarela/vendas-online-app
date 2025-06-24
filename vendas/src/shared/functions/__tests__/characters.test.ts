import { removeSpecialCharacters } from "../characters";

describe('Characters', () => {

    it('should remove special characters', () => {
        const onlyNumbers = 'dfj454gjd.-fgd545$,dfs'

        expect('454545').toEqual(removeSpecialCharacters(onlyNumbers));
    }); 
})