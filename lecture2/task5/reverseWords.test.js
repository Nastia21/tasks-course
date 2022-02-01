import { reverseWords } from './';

describe('reverseWords', () => {
  test('Should return true, num = 2',
    function() {
      const result = reverseWords('double  spaces');

      expect(result).toBe('elbuod  secaps');
    });

  test('Should return true, num = 2',
    function() {
      const result = reverseWords('The quick brown fox jumps over the lazy dog.');

      expect(result).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god');
    });

});
