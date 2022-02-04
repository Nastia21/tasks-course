import { createUrl } from './';

describe('createUrl', () => {
  test('Should return /api/0',
    function() {
      const result = createUrl('/api/{id}', {id: 0})    ;

      expect(result).toBe('/api/0');
    });

  test('Should return api/undefined',
    function() {
      const result = createUrl('/api/{id}', {name: 'Petya'});

      expect(result).toBe('/api/undefined');
    });

  test('Should return /api/items/0',
    function() {
      const result = createUrl('/api/{list}/{id}', {list: 'items', id: 0 });

      expect(result).toBe('/api/items/0');
    });

});
