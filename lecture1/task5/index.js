export const getTime = (strTask) => {
    const format = /\d{2}:\d{2}/g;
    const arr = strTask.match(format);

    for (let i = 0; i < arr.length; i++) {
        let arrTime = arr[i].split(':');
        const hours = Number(arrTime[0]);
        const min = Number(arrTime[1]);
        if (hours <= 23 && min <= 59) {
            return arrTime.join(':');
            break;
        }
        else {
            continue;
        }
        if (hours > 23 || min > 59) {
            return "";
        }
            
    }
}
