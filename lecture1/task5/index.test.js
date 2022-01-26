import { getTime } from './'

describe('getTime', () => {
    test('Should return 09:00',
        function () {
            const result = getTime('Breakfast at 09:00')
            expect(result).toBe('09:00');
        });

    test('Should return 21:00',
        function () {
            const result = getTime('Breakfast at 09:60, Dinner at 21:00')
            expect(result).toBe('21:00');
        });

    test('Should return 09:59',
        function () {
            const result = getTime('Breakfast at 09:59, Dinner at 21:00')
            expect(result).toBe('09:59');
        });

    test('Should return 11:23',
        function () {
            const result = getTime('Breakfast at , and lunch at 11:23')
            expect(result).toBe('11:23');
        });

    test('Should return empty string',
        function () {
            const result = getTime('Breakfast at 10:65')
            expect(result).toBe("");
        });
});



