export const alphabetPosition = (strTask) => {

    strTask = strTask.replace(/[,.!'?\s]/g, "");
    const firstPosition = 'a'.charCodeAt();
    strTask = strTask.toLowerCase();

    const strArr = strTask.split('');
    if(strArr.length === 0 )
    {
        return "nothing";
    }

    for (let i = 0; i < strArr.length; i++) {
        const positionOfLetter = strArr[i].charCodeAt();
        const sentencePosition = positionOfLetter - firstPosition + 1;
       strArr[i] = sentencePosition;
    }
    
    return strArr.join(' ');
}
