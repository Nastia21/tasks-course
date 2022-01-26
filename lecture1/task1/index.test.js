import { basicOp } from './'

describe('basicOp', () => {
    test('Should return 4 when 2 added 2',
        function () {
            const result = basicOp(2, 2, '+')
            expect(result).toBe(4)
        });

    test('Should return 8 when 10 substracted 2',
        function () {
            const result = basicOp(10, 2, '-')
            expect(result).toBe(8)
        });

    test('Should return 20 when 10 multiplied by 2',
        function () {
            const result = basicOp(10, 2, '*')
            expect(result).toBe(20)
        });

    test('Should return 5 when 25 divided by 5',
        function () {
            const result = basicOp(25, 5, '/')
            expect(result).toBe(5)
        });

    test('Should return infinity when 25 divide 0',
        function () {
            const result = basicOp(25, 0, '/')
            expect(result).toBe(Infinity)
        });

    test('Should return error',
        function () {
            const result = basicOp(25, 0, 'a')
            expect(result).toBe(0)
        });


});
    
