import axios from 'axios';

export const getUserPostComment = async () => {
  try {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

    const responseUser = await axios.get(usersUrl);
    const responsePost = await axios.get(postsUrl);
    const responseComment = await axios.get(commentsUrl);

    const dataUsers = responseUser.data; 
    const postUsers = responsePost.data;
    const commentUsers = responseComment.data;

    const arrPostAndComment = postUsers.map(obj=>Object.assign({}, obj, 
      {comments: commentUsers.filter(commUser => (obj.id ==  commUser.postId))}));

    const userPostComment = dataUsers.map(obj=>Object.assign({}, obj, 
      {posts: arrPostAndComment.filter(item => (obj.id ==  item.userId))}));

    return userPostComment;

  } catch (error) {
    return error.message;
  }
  
}

