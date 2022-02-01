export const createUrl = (strTask, objInput) => {
  const format = /{([\w}]*)}/g;
  const arrGetProperty = strTask.match(format);
    
  for(let i = 0; i < arrGetProperty.length; i++){
    arrGetProperty[i] = arrGetProperty[i].replace(/[{}]/g, '');
  }

  for(let i = 0; i < arrGetProperty.length; i++){
      
    if(test.hasOwnProperty("'" + arrGetProperty[i] + "'")) {
    
      let value = objInput["'"+ arrGetProperty[i] +"'"];

      value = strTask.replace(arrGerProperty[i], value);
      
      return value;
    } else{
      const value = strTask.replace(arrGerProperty, 'undefined');

      return(value);
    }    
  }
};

