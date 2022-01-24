import { getOperands } from './'

describe('getOperands', () => {
    test('Should return a: 1 b: -3',
        function () {
            const result = getOperands("1 + -3")
            expect(result).toBe('a: 1 b: -3');
        });
});

describe('getOperands', () => {
    test('Should return a: -2 b: -3',
        function () {
            const result = getOperands("-2 + -3")
            expect(result).toBe('a: -2 b: -3');
        });
});

describe('getOperands', () => {
    test('Should return a: -5 b: -5',
        function () {
            const result = getOperands("-5 - -5")
            expect(result).toBe('a: -5 b: -5');
        });
});

describe('getOperands', () => {
    test('Should return a: 10 b: 5',
        function () {
            const result = getOperands("10 +5")
            expect(result).toBe('a: 10 b: 5');
        });
});

describe('getOperands', () => {
    test('Should return a: 2 b: 2',
        function () {
            const result = getOperands("2 * ,")
            expect(result).toBe('a: 2 b: 2');
        });
});

describe('getOperands', () => {
    test('Should return a: 15 b: 5',
        function () {
            const result = getOperands("15 / 5")
            expect(result).toBe('a: 15 b: 5');
        });
});

describe('getOperands', () => {
    test('Should return a: 10 b: 5',
        function () {
            const result = getOperands("10 -a")
            expect(result).toBe('a: 10 b: 5');
        });
});

describe('getOperands', () => {
    test('Should return a: 10 b: 5 ',
        function () {
            const result = getOperands("10 -")
            expect(result).toBe('a: 10 b: 5');
        });
});


