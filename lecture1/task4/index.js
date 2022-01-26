export const getOperands = (strTask) => {
    const separator = ' ';
    const strNewArr = strTask.split(separator);
    
    return 'a: ' + strNewArr[0] + " b: " + strNewArr[1];
}
