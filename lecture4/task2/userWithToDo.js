export const userWithToDo = async() => {
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';

  const todoUrl = 'https://jsonplaceholder.typicode.com/todos';

  const responseUser = await fetch(usersUrl);

  const responseToDo = await fetch(todoUrl);

  const dataUsers = await responseUser.json();
  
  const dataDo = await responseToDo.json();
  
  const filteredComplete = dataDo.filter(checkDo => checkDo.completed);
  
  const objTotal = dataUsers.map(obj=>Object.assign({}, obj, 
    {tasks: filteredComplete.filter(checkDo => (checkDo.completed &&  (obj.id ==  checkDo.userId)))}));

  return objTotal;
  
};

userWithToDo().catch(error => {
  
  return error.message; 

});
