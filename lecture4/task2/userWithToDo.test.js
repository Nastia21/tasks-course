import { userWithToDo } from './';

global.fetch = jest.fn(() =>
  Promise.resolve(
    {
      json: () => Promise.resolve(),
    }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe('userWithToDo', () => {

  beforeEach(() => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve([{
        'id': 1, 'name': 'Leanne Graham',
      }]),
    }));

    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve([{
        'completed': true,
        'userId': 1,
      }]),
    }));
  });


  test('function works right works', async () => {

    const result = await userWithToDo();

    expect(result).toEqual([{
      'id': 1,
      'name': 'Leanne Graham',
      'tasks': [{
        'completed': true,
        'userId': 1,
      }],
    }],
    );
  });


  test('fetch should be called twice', async() => {
    await userWithToDo();

    expect(fetch).toHaveBeenCalledTimes(2);

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
    );

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos',
    );
  });

  test('returns error when exception', async() => {
    fetch.mockImplementationOnce(() => Promise.reject('Error'));

    const result = await userWithToDo();

    expect(result).toEqual('Error');
    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');

  });

});
