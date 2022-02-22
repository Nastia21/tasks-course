import axios from 'axios';

import { getUserPostComment } from './';

jest.mock('axios');

beforeEach(() => {
  axios.mockClear();
});

describe('getUserPostComment', () => {

  const users = [{
    'id': 1,
    'name': 'Leanne Graham',
    'username': 'Bret'
  },];
  
  const posts = [{
    'userId': 1,
    'id': 1,
    'title': 'sunt aut facere repellat',
  }];
  
  const comments = [{
    'postId': 1,
    'id': 1,
    'body': 'laudantium enim quasi est',
  },];

    test("should return empty users list", async () => {
      axios.get.mockRejectedValueOnce(null);

      const result = await getUserPostComment();

      expect(result).toEqual([]);
    });

});
