export const createPrevArgSaver = () => {
  let inputParam;
  
  return function() {
    const args = [...arguments];
    let previousCall = inputParam;

    inputParam = args[0];

    return previousCall;
  };
};