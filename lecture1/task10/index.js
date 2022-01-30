export const alphabetPosition = (strTask) => {

    strTask = strTask.replace(/[,.!'?\s]/g, "");
    const firstPosition = 'a'.charCodeAt();
    strTask = strTask.toLowerCase();

    let strArr = strTask.split('');
    
    if(strArr.length === 0 )
    {
        return "nothing";
    }

    for (let i = 0; i < strArr.length; i++) {
        const positionOfLetter = strArr[i].charCodeAt();
        const sentencePosition = Number(positionOfLetter - firstPosition + 1);
        strArr[i] = sentencePosition;
    }

    strArr = strArr.join(' ');
    return strArr;
}
