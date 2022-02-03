export const squareList = (arrNumbers) => {
  arrNumbers.filter(arrNumber => {
    if (!isNaN(arrNumber)){
      return arrNumbers;
    } else{
      return []; //error: string in array
    }

  });
  
  const arrFilterInteger = arrNumbers.filter(arrNumber => (Number.isInteger(arrNumber) && arrNumber > 0));
  
  const arrValuesSquare = arrFilterInteger.map(arrFilterInteger =>  arrFilterInteger**2);

  return arrValuesSquare;
};

