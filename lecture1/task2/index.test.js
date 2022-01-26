import { stringMerge } from './'

describe('stringMerge', () => {
    test('Should return "codinywhere" when combinated 2 words',
        function () {
            const result = stringMerge('coding', 'anywhere', 'n')
            expect(result).toBe('codinywhere')
        });

    test('Should return "error"',
        function () {
            const result = stringMerge('samson', 'hello', 's')
            expect(result).toBe('Error')
        });

    test('Should return "wondeople" when combinated 2 words',
        function () {
            const result = stringMerge('wonderful', 'people', 'e')
            expect(result).toBe("wondeople")
        });

        test('Should return "jasamson" when combinated 2 words',
        function () {
            const result = stringMerge('jason', 'samson', 's')
            expect(result).toBe("jasamson")
        });

        test('Should return "held" when combinated 2 words',
        function () {
            const result = stringMerge('hello', 'world', 'l')
            expect(result).toBe("held")
        });
});
