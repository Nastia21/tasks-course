export const createAdder = (initialValue = 0) => {
  let inputValue = initialValue;
  
  return function(){
    const sum = [...arguments].reduce((previous, current) => {
      return previous + current;
    }, 0);
  
    inputValue += sum;

    return inputValue;
  };
};

