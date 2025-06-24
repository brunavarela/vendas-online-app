import { validateEmail } from "../email";

describe('Email - validateEmail', () => {

    it('should return false when email has no @ symbol', () => {
        expect(validateEmail('dfdf.com.br')).toEqual(false);
        expect(validateEmail('bruna.com')).toEqual(false);
    });

    it('should return false when email has no domain', () => {
        expect(validateEmail('bruna@')).toEqual(false);
    });

    it('should return false when email has space character', () => {
        expect(validateEmail('bru na@teste.com')).toEqual(false);
    });

    it('should return false when email has invalid characters', () => {
        expect(validateEmail('bruna!@teste.com')).toEqual(false);
        expect(validateEmail('bruna#@teste.com')).toEqual(false);
    });

    it('should return false when email is empty', () => {
        expect(validateEmail('')).toEqual(false);
    });

    it('should return false when email has multiple @ symbols', () => {
        expect(validateEmail('bruna@@teste.com')).toEqual(false);
    });

    it('should return false when domain is invalid', () => {
        expect(validateEmail('bruna@teste')).toEqual(false);
        expect(validateEmail('bruna@teste.')).toEqual(false);
        expect(validateEmail('bruna@.com')).toEqual(false);
    });

    it('should return true when email is valid', () => {
        expect(validateEmail('bruna@teste.com')).toEqual(true);
        expect(validateEmail('bruna.varela@empresa.co')).toEqual(true);
        expect(validateEmail('bruna_123@sub.dominio.dev')).toEqual(true);
    });

});
