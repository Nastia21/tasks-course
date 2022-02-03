import { isPrime } from './';

describe('isPrime', () => {
  test('Should return true, num = 2',
    function() {
      const result = isPrime(2);

      expect(result).toBe(true);
    });

  test('Should return true, num = 73',
    function() {
      const result = isPrime(73);

      expect(result).toBe(true);
    });

  test('Should return false, num = 1',
    function() {
      const result = isPrime(1);

      expect(result).toBe(false);
    });

  test('Should return false, num = 75',
    function() {
      const result = isPrime(75);

      expect(result).toBe(false);
    });

  test('Should return false, num = -1',
    function() {
      const result = isPrime(-1);

      expect(result).toBe(false);
    });

  test('Should return error',
    function() {
      const result = isPrime('abc');

      expect(result).toBe('Error with input number');
    });

});
