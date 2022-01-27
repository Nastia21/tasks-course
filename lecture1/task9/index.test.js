import { vowelCount } from './'

describe('vowelCount', () => {
    test('Should return 5',
        function () {
            const result = vowelCount('abracadabra')
            expect(result).toBe(5);
        });
    test('Should return 2',
        function () {
            const result = vowelCount('letter')
            expect(result).toBe(2);
        });
    test('Should return 1',
        function () {
            const result = vowelCount('toy')
            expect(result).toBe(1);
        });
    test('Should return 0',
        function () {
            const result = vowelCount('555')
            expect(result).toBe(0);
        });
    test('Should return 0',
        function () {
            const result = vowelCount('55ttyy')
            expect(result).toBe(0);
        });


});

