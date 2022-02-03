export const invertObject = (objInput) => {
  const task = objInput;
  const arrValueOfObjInput = Object.values(task);
  const result = [];
  
  for (const value of arrValueOfObjInput) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }

  if(arrValueOfObjInput.length ===result.length){
    const arrWithSwappedProperty = swapProperty();

    return arrWithSwappedProperty;
  }else{
    return null;
  }
  
  function swapProperty(){
    const resultObj = {};

    for (const [key, value] of Object.entries(task))  {
      
      resultObj[value] = key;
    }
    
    return resultObj;
  }
};

