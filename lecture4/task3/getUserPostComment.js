import axios from 'axios';
require('dotenv').config();

export const getUserPostComment = async () => {
  try {
    const responseUser = await axios.get(process.env.USERS_URL);
    const responsePost = await axios.get(process.env.POSTS_URL);
    const responseComment = await axios.get(process.env.COMMENTS_URL);

    const dataUsers = responseUser.data; //sync
    const postUsers = responsePost.data;
    const commentUsers = responseComment.data;

    const arrPostAndComment = postUsers.map(obj=>Object.assign({}, obj, 
      {comments: commentUsers.filter(commUser => (obj.id ==  commUser.postId))}));

    const userPostComment = dataUsers.map(obj=>Object.assign({}, obj, 
      {posts: arrPostAndComment.filter(item => (obj.id ==  item.userId))}));

    console.log({userPostComment});

  } catch (error) {
    return error.message;
  }
  
}

