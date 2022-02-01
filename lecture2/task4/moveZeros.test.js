import { moveZeros } from './';

describe('moveZeros', () => {
  test('Should return arr = [false,1,1,2,1,3,"a",0,0]',
    function() {
      const result = moveZeros([false,1,0,1,2,0,1,3,'a']);

      expect(result).toEqual([false,1,1,2,1,3,'a',0,0]);
    });
});