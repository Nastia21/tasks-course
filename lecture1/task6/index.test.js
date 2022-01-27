import { isPalindrome } from './'

describe('isPalindrome', () => {
    test('Should return true',
        function () {
            const result = isPalindrome('Eva, can I see bees in a cave')
            expect(result).toBe(true);
        });
    test('Should return false',
        function () {
            const result = isPalindrome('race a car')
            expect(result).toBe(false);
        });
    test('Should return true',
        function () {
            const result = isPalindrome('Was it a cat I saw?')
            expect(result).toBe(true);
        });
    test('Should return false',
        function () {
            const result = isPalindrome('abc!')
            expect(result).toBe(false);
        });
    test('Should return true',
        function () {
            const result = isPalindrome('12.02.2021')
            expect(result).toBe(true);
        });
    test('Should return true',
        function () {
            const result = isPalindrome('')
            expect(result).toBe(true);
        });
});



