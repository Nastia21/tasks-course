import { createPhoneNumber } from './'

describe('createPhoneNumber', () => {
    test('Should return (123) 456-7890',
        function () {
            let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
            const result = createPhoneNumber(number)
            expect(result).toBe('(123) 456-7890');
        });
});

describe('createPhoneNumber', () => {
    test('Should return (123) 456-789',
        function () {
            let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const result = createPhoneNumber(number)
            expect(result).toBe('(123) 456-789');
        });
});

describe('createPhoneNumber', () => {
    test('Should return (123) 456-7890',
        function () {
            let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const result = createPhoneNumber(number)
            expect(result).toBe('(123) 456-7890');
        });
});

describe('createPhoneNumber', () => {
    test('Should return (123) 456-7890',
        function () {
            let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, b];
            const result = createPhoneNumber(number)
            expect(result).toBe('(123) 456-7890');
        });
});

describe('createPhoneNumber', () => {
    test('Should return (123) 456-7890',
        function () {
            let number = [];
            const result = createPhoneNumber(number)
            expect(result).toBe('(123) 456-7890');
        });
});


