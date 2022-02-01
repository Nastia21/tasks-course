import { calculateRentalCost } from './';

describe('calculateRentalCost', () => {
  test('Should return 80',
    function() {
      const result = calculateRentalCost(2);

      expect(result).toBe(80);
    });

  test('Should return 100',
    function() {
      const result = calculateRentalCost(3);

      expect(result).toBe(100);
    });

  test('Should return 230',
    function() {
      const result = calculateRentalCost(7);

      expect(result).toBe(230);
    });
});