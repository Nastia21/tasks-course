import { sortedProductList } from './';

global.fetch = jest.fn(() =>
  Promise.resolve(
    {
      json: () => Promise.resolve(),
    }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe('sortedProductList', () => {

  beforeEach(() => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve([{
        'category':'electronics', 'price': 599,
      }, {
        'category':'electronics', 'price': 999.99,
      }]),
    }));
  });
  

  test('Sorting is right', async() => {

    const result = await sortedProductList();

    expect(result).toEqual([{
      'category':'electronics', 'price': 999.99,
    }, {
      'category':'electronics', 'price': 599,
    }]);
  });


  test('Fetch should be called once with "https://fakestoreapi.com/products"', async() => {
    await sortedProductList();

    expect(fetch).toHaveBeenCalledTimes(1);

    expect(fetch).toHaveBeenCalledWith(
      'https://fakestoreapi.com/products',
    );
  });

  test('It will returns error when exception', async() => {
    fetch.mockImplementationOnce(() => Promise.reject('Error'));

    const result = await sortedProductList();
   
    expect(result).toEqual('Error');
    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');

  });

});