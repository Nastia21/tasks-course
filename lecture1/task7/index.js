export const swapCase = (strTask) => {
    const strArr = strTask.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === strArr[i].toLowerCase()) {
            strArr[i] = strArr[i].toUpperCase();
        }
        else {
            strArr[i] = strArr[i].toLowerCase();
        }
    }
    return strArr.join('');
}
