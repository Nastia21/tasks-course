require('dotenv').config();

export const userWithToDo = async() => {
  try {
    const responseUser = await fetch(process.env.USERS_URL);
    const responseToDo = await fetch(process.env.TODO_URL);

    const dataUsers = await responseUser.json();
    const dataDo = await responseToDo.json();

    const filteredComplete = dataDo.filter(checkDo => checkDo.completed);

    const objTotal = dataUsers.map(obj => Object.assign({}, obj,
      { tasks: filteredComplete.filter(checkDo => (obj.id == checkDo.userId)) }));

    return objTotal;
  } catch (error) {
    return error.message;
  }
};


