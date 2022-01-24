import { getTime } from './'

describe('getTime', () => {
    test('Should return 11:23',
        function () {
            const result = getTime('Breakfast at 09:61, and lunch at 11:23')
            expect(result).toBe('11:23');
        });
});

describe('getTime', () => {
    test('Should return 08:01',
        function () {
            const result = getTime('Breakfast at 08:01, and lunch at 11:23')
            expect(result).toBe('08:01');
        });
});

describe('getTime', () => {
    test('Should return 11:23',
        function () {
            const result = getTime('Breakfast at 09:, and lunch at 11:23')
            expect(result).toBe('11:23');
        });
});

describe('getTime', () => {
    test('Should return 11:23',
        function () {
            const result = getTime('Breakfast at , and lunch at 11:23')
            expect(result).toBe('11:23');
        });
});

describe('getTime', () => {
    test('Should return empty string',
        function () {
            const result = getTime('Breakfast at 10:65')
            expect(result).toBe("");
        });
});



