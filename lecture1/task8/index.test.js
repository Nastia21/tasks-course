import { countOccurrences } from './'

describe('countOccurrences', () => {
    test('Should return 2',
        function () {
            const result = countOccurrences('ability', 'i')
            expect(result).toBe(2);
        });

    test('Should return 1',
        function () {
            const result = countOccurrences('abc', 'a')
            expect(result).toBe(1);
        });
    test('Should return 1',
        function () {
            const result = countOccurrences('ABC', 'a')
            expect(result).toBe(1);
        });
    test('Should return 0',
        function () {
            const result = countOccurrences('ABCde', 'f')
            expect(result).toBe(0);
        });
});



