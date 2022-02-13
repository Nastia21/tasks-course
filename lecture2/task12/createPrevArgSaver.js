export const createPrevArgSaver = (inputParam) => {
  return function(nextCall) {
    const previousCall = inputParam;

    inputParam = nextCall;

    return previousCall;
  };
};
