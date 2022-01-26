export const getOperands = (strTask) => {
    const separator = ' ';
    let strNewArr = strTask.split(separator);
    
    return 'a: ' + strNewArr[0] + " b: " + strNewArr[2];
}
