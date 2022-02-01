import { invertColor } from './';

describe('invertColor', () => {
  test('Should return #ffffff',
    function() {
      const result = invertColor('#000000');

      expect(result).toBe('#ffffff');
    });

  test('Should return #221155',
    function() {
      const result = invertColor('#DDEEAA');

      expect(result).toBe('#221155');
    });

  test('Should return #fedcba',
    function() {
      const result = invertColor('#012345');

      expect(result).toBe('#fedcba');
    });

  
});
