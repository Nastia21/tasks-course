import { getOperands } from './'

describe('getOperands', () => {
    test('Should return a: 1, b: 2',
        function () {
            const result = getOperands("1 + 2")
            expect(result).toBe('a: 1, b: 2');
        });

    test('Should return a: 1.2, b: -3.4',
        function () {
            const result = getOperands("1.2 * -3.4")
            expect(result).toBe('a: 1.2, b: -3.4');
        });

    test('Should return a: 1, b: 2',
        function () {
            const result = getOperands("1 - 2")
            expect(result).toBe('a: 1, b: 2');
        });

    test('Should return a: 1, b: -2',
        function () {
            const result = getOperands("1 - -2")
            expect(result).toBe('a: 1, b: -2');
        });

    test('Should return a: 15, b: 5',
        function () {
            const result = getOperands("15 / 5")
            expect(result).toBe('a: 15, b: 5');
        });
});




