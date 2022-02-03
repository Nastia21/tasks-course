import { squareList  } from './';

describe('squareList ', () => {
  test('Should return [16, 1764, 36]',
    function() {
      const result = squareList ([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);

      expect(result).toEqual([16, 1764, 36]);
    });

  test('Should return [9, 100, 49]',
    function() {
      const result = squareList ([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);

      expect(result).toEqual([9, 100, 49]);
    });

  test('Should return ERROR with input numbers',
    function() {
      const result = squareList ([-3.7, 'a', 'b', -17, 0.3]);

      expect(result).toEqual([]);
    });

});
