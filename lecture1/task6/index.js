export const isPalindrome = (strTask) => {
    strTask = strTask.replace(/[, . ! ? \s ]/g, "");
    const strLowerCase = strTask.toLowerCase();

    const strArr = strLowerCase.split('');
    const strReversed = strArr.reverse().join('');

    const result = (strReversed == strLowerCase) ? true : false;
    return result;
}
