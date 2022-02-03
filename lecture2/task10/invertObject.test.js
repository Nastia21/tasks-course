import { invertObject  } from './';

describe('invertObject ', () => {
  test('Should return {}',
    function() {
      const result = invertObject ({});

      expect(result).toEqual({});
    });

  test('Should return {"bar": "foo"}',
    function() {
      const result = invertObject ({"foo": "bar"});

      expect(result).toEqual({"bar": "foo"});
    });

  test('Should return {"2": "1", "4": "2", "6": "3"}',
    function() {
      const result = invertObject ({"1": 2, "2": 4, "3": 6});

      expect(result).toEqual({'2': '1', '4': '2', '6': '3'});
    });

  test('Should return null',
    function() {
      const result = invertObject ({"foo": "bar", "hello": "world", "js": "bar"});

      expect(result).toEqual(null);
    });

});
