export const frankenSplice = (arrFirst, arrSecond, index) => {
  
  if(Number.isInteger(index)){
    const arrTemp = arrSecond.slice(0,index);

    let arrResult = arrTemp.concat(arrFirst);

    arrResult = arrResult.concat(arrSecond.slice(index));

    return arrResult;
  } else{
    return 'error with index';
  }
};

