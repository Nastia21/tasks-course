import { transformState } from './';

describe('transformState', () => {
  test('Should return {foo: "bar", name: "Jim"}',
    function() {
      let state =   {
        foo: 'bar', name: 'Jim', another: 'one',
      };
      const transforms =   [
        {
          operation: 'addProperties', properties: {yet: 'another property'},
        }, 
        {operation: 'clear'},
        {
          operation: 'addProperties', properties: {foo: 'bar', name: 'Jim',
          },
        },
      ];
        
      const result = transformState(state, transforms);

      expect(result).toEqual({foo: 'bar', name: 'Jim'});
    });
  
  test('Should return {name: "Jim"}',
    function() {
      let state =   {};
      const transforms =   [
        {
          operation: 'addProperties', properties: { name: 'Jim' },
        },
      ];
        
      const result = transformState(state, transforms);

      expect(result).toEqual({name: 'Jim'});
    });
  
  test('Should return {}',
    function() {
      let state = {
        foo: 'bar', name: 'Jim', another: 'one',
      };
      const transforms =   [
        { operation: 'clear'},
      ];
        
      const result = transformState(state, transforms);

      expect(result).toEqual({});
    });


  test('Should return { foo: "bar" }',
    function() {
      let state = {
        foo: 'bar', name: 'Jim', another: 'one',
      };
      const transforms =   [
        {
          operation: 'removeProperties', properties: ['another'],
        }, 
        { operation: 'clear' },
        { operation: 'clear' },
        { operation: 'clear' },
        {
          operation: 'addProperties', properties: { yet: 'another property' },
        },
        { operation: 'clear' },
        {
          operation: 'addProperties', properties: { foo: 'bar', name: 'Jim' },
        },
        {
          operation: 'removeProperties', properties: ['name', 'hello'],
        },
        
      ];
        
      const result = transformState(state, transforms);

      expect(result).toEqual({ foo: 'bar' });
    });
});
