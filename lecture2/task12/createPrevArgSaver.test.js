import { createPrevArgSaver } from './';

const argSaver  = createPrevArgSaver(); 

describe('createPrevArgSaver', () => {
  test('Should return undefined',
    function() {      
      const result = argSaver(123);   

      expect(result).toBe(undefined);
    });

    test('Should return 123',
    function() {      
      const result = argSaver(456);   
    
      expect(result).toBe(123);
    });
    test('Should return 456',
    function() {      
      const result = argSaver(100,200,300);  
    
      expect(result).toBe(456);
    });


    test('Should return 100',
    function() {      
      const result = argSaver();  
    
      expect(result).toBe(100);
    });

    test('Should return undefined',
    function() {      
      const result = argSaver(741);     
    
      expect(result).toBe(undefined);
    });
},
);
