export const vowelCount = (strTask) => {
    const strArr = strTask.match(/[aeiou]/g);
    if (strArr == null){
        return 0;
    }
    const count = strArr.length;
    return count;
}
