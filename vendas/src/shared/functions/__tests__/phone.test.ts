import { insertMaskInPhone, validatePhone } from "../phone";

const PHONE = '1187934819';
const PHONE_WITH_MASK = '(11) 8793-4819';
const CELL_PHONE = '11987934819';
const CELL_PHONE_WITH_MASK = '(11) 98793-4819';

describe('Phone', () => {

    it('should insert mask in cell phone', () => {
        expect(CELL_PHONE_WITH_MASK).toEqual(insertMaskInPhone(CELL_PHONE));
    });

    it('should insert mask in phone', () => {
        expect(PHONE_WITH_MASK).toEqual(insertMaskInPhone(PHONE));
    });
    
    it('should return success valid cell phone', () => {
        expect(true).toEqual(validatePhone(CELL_PHONE));
        expect(true).toEqual(validatePhone(CELL_PHONE_WITH_MASK));
    });
     
    it('should return success valid phone', () => {
        expect(true).toEqual(validatePhone(PHONE));
        expect(true).toEqual(validatePhone(PHONE_WITH_MASK));
    });

    it('should return error in invalid phone', () => {
        expect(false).toEqual(validatePhone('234343'));
    }); 

});