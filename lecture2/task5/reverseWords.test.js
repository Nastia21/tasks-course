import { reverseWords } from './';

describe('reverseWords', () => {
  test('Should return elbuod  secaps ',
    function() {
      const result = reverseWords('double  spaces');

      expect(result).toBe('elbuod  secaps');
    });

  test('Should return ehT kciuq nworb xof spmuj revo eht yzal .god',
    function() {
      const result = reverseWords('The quick brown fox jumps over the lazy dog.');

      expect(result).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god');
    });

});
