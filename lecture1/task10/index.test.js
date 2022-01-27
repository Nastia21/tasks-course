import { alphabetPosition } from './'

describe('alphabetPosition', () => {
    test('Should return 20 8 5 19 21 14 19 5 20 19 5 20 ....',
        function () {
            const result = alphabetPosition("The sunset sets at twelve o' clock.")
            expect(result).toBe('20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11');
        });

    test('Should return "nothing"',
        function () {
            const result = alphabetPosition(". , !")
            expect(result).toBe('nothing');
        });

    test('Should return 1 2',
        function () {
            const result = alphabetPosition("!ab")
            expect(result).toBe('1 2');
        });
        
    test('Should return "nothing"',
        function () {
            const result = alphabetPosition("")
            expect(result).toBe('nothing');
        });
});