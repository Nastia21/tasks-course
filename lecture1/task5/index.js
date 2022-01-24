export const getTime = (strTask) => {
    const patter = /\d{2}:\d{2}/g;
    const arr = strTask.match(patter);
    let len = arr.length;

    for (let i = 0; i < arr.length; i++) {
        let arrTime = arr[i].split(':');
        let hours = Number(arrTime[0]);
        let min = Number(arrTime[1]);
        if (hours <= 23 && min <= 59) {
            return arrTime.join(':');
            break;
        }
        if (hours >= 23 && min >= 59) {
            return "";
        }
        else {
            continue;
        }
    }
}
