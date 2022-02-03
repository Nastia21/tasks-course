import { fearNotLetter  } from './';

describe('fearNotLetter ', () => {
  test('Should return d',
    function() {
      const result = fearNotLetter ('abce');

      expect(result).toBe('d');
    });

  test('Should return i',
    function() {
      const result = fearNotLetter ('abcdefghjklmno');

      expect(result).toBe('i');
    });

  test('Should return u',
    function() {
      const result = fearNotLetter ('stvwx');

      expect(result).toBe('u');
    });

  test('Should return undefined',
    function() {
      const result = fearNotLetter ('abcdefghijklmnopqrstuvwxyz');

      expect(result).toBe('undefined');
    });



});
