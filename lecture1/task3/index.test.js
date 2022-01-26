import { createPhoneNumber } from './'

describe('createPhoneNumber', () => {
    test('Should return (123) 456-7890',
        function () {
            const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
            const result = createPhoneNumber(number)
            expect(result).toBe('(123) 456-7890');
        });

    test('Should return (123) 456-789',
        function () {
            const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const result = createPhoneNumber(number)
            expect(result).toBe('(123) 456-789');
        });

    test('Should return error',
        function () {
            const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 3];
            const result = createPhoneNumber(number)
            expect(result).toBe('Enter 10 numbers');
        });

});


