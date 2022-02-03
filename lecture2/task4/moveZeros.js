export const moveZeros = (arrOfValues) => {
  
  for(let i = 0; i < arrOfValues.length; i++){
    for (let j = i + 1; j < arrOfValues.length; j++){
      if(arrOfValues[i] === 0){
        const temp = arrOfValues[j];

        arrOfValues[j] = arrOfValues[i];
        arrOfValues[i] = temp;
      }
    }
  }

  return arrOfValues;
};


