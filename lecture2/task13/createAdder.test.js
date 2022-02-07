import { createAdder } from './';

const adder1 = createAdder();

const adder2 = createAdder(100);

describe('createPrevArgSaver', () => {
  test('Should return 0',
    function() {
      const result = adder1();

      expect(result).toBe(0);
    });

  test('Should return 30',
    function() {
      const result = adder1(10,20);

      expect(result).toBe(30);
    });

  test('Should return 100',
    function() {
      const result = adder1(30,40);

      expect(result).toBe(100);
    });
    
  test('Should return 110',
    function() {
      const result = adder2(10);

      expect(result).toBe(110);
    });

  test('Should return 200',
    function() {
      const result = adder2(20,30,40);

      expect(result).toBe(200);
    });

  test('Should return 200',
    function() {
      const result = adder2();

      expect(result).toBe(200);
    });

},
);
