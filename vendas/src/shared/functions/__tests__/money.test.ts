import { convertNumberToMoney } from "../money";

describe('Money', () => {

    it('should return money', () => {
        const returnMoney = convertNumberToMoney(55);

        expect(returnMoney).toContain('R$');
        expect(returnMoney).toContain('55,00');
    });

    it('should return money with decimal', () => {
        const returnMoney = convertNumberToMoney(554.54);

        expect(returnMoney).toContain('R$');
        expect(returnMoney).toContain('554,54');
    });

    it('should return money with thousand', () => {
        const returnMoney = convertNumberToMoney(2554.54);

        expect(returnMoney).toContain('R$');
        expect(returnMoney).toContain('2.554,54');
    }); 
});