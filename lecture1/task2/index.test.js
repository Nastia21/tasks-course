import { stringMerge } from './'

describe('stringMerge', () => {
    test('Should return "codinywhere" 4 when passed 2 and 2',
        function () {
            const result = stringMerge('coding', 'anywhere', 'n')
            expect(result).toBe('codinywhere')
        });
});

describe('stringMerge', () => {
    test('Should return "error"',
        function () {
            const result = stringMerge('samson', 'hello', 's')
            expect(result).toBe('Error')
        });
});

describe('stringMerge', () => {
    test('Should return error when combinated 2 words',
        function () {
            const result = stringMerge('coding', 'anywhere', 'l')
            expect(result).toBe('Error')
        });
});
