export const reverseWords = (strTask) => {
  const arrOfCharOfTask = strTask.split('');

  let countOfSpace = 0;

  arrOfCharOfTask.forEach(item =>{
    if(item === ' ') {
      countOfSpace++;
    }
  });

  let arrOfWordsOfTask = [];

  if(countOfSpace > 1){
    arrOfWordsOfTask = strTask.split('  ');
  }

  arrOfWordsOfTask = strTask.split(' ');

  const newArrWords = new Array();

  arrOfWordsOfTask.forEach(item =>{
    const itemNew = item.split('');
    
    itemNew.reverse();
    itemNew.join();
    newArrWords.push(itemNew.join(''));
  });
  
  if(countOfSpace > 1){
    newArrWords.join('  ');
  }

  return newArrWords.join(' ');
};

