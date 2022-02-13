export const frankenSplice = (arrFirst, arrSecond, index) => {
  
  if(Number.isInteger(index)){
    arrSecond.splice(index, 0, ...arrFirst);

    return arrSecond;
  } else{
    return 'error with index';
  }
};
