export const moveZeros = (arrOfValues) => {
  
  for(let i = 0; i < arrOfValues.length; i++){
    if( arrOfValues[i] === 0 ){
      arrOfValues.push(arrOfValues[i]);
      arrOfValues.splice(i, 1);
    }
  }
 
  return arrOfValues;
};

