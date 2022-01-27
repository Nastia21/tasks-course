import { swapCase } from './'

describe('swapCase', () => {
    test('Should return "AbC"',
        function () {
            const result = swapCase('aBc')
            expect(result).toBe('AbC');
        });

    test('Should return "gOOd"',
        function () {
            const result = swapCase('GooD')
            expect(result).toBe('gOOd');
        });

    test('Should return "HELLO"',
        function () {
            const result = swapCase('hello')
            expect(result).toBe('HELLO');
        });

    test('Should return "jANUARY 27"',
        function () {
            const result = swapCase('January 27')
            expect(result).toBe('jANUARY 27');
        });

    test('Should return "75386"',
        function () {
            const result = swapCase('75386')
            expect(result).toBe('75386');
        });
});



