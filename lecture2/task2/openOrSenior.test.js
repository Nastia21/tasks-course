import { openOrSenior } from './';

describe('openOrSenior', () => {
  test('Should return ["Open", "Senior", "Open", "Senior"]',
    function() {
      const result = openOrSenior([[31, 10],[55,23],[20, 0],[41, 16]]);

      expect(result).toEqual(['Open', 'Senior', 'Open', 'Senior']);
    });

  test('Should return ["Open", "Open", "Open", "Open"]',
    function() {
      const result = openOrSenior([[34, 11],[55,7],[39, 16],[38, 14]]);

      expect(result).toEqual(['Open', 'Open', 'Open', 'Open']);
    });

});
