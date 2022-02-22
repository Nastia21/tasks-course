require('dotenv').config();

export const userWithToDo = async() => {
  try {
    const responseUser = await fetch(process.env.USERS_URL);
    const responseToDo = await fetch(process.env.TODO_URL);

    const datOfUsers = await responseUser.json();
    const arrOfToDo = await responseToDo.json();

    const filteredComplete = arrOfToDo.filter(item => item.completed);

    const objResult = datOfUsers.map(obj => Object.assign({}, obj,
      { tasks: filteredComplete.filter(item=> (obj.id == item.userId)) }));

    return objResult;
  } catch (error) {
    //throw new Error('error with smth');
    return null;
  }
};
