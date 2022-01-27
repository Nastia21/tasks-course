export const getTime = (strTask) => {
 
  const format = /[0-9]{2}:[0-9]{2}/g;
  const arrFoundTime = strTask.match(format);

  for (let i = 0; i < arrFoundTime.length; i++) {
    const arrHourAndMin = arrFoundTime[i].split(':');
    const hours = Number(arrHourAndMin[0]);
    const min = Number(arrHourAndMin[1]);
    if (hours <= 23 && min <= 59) {
      return arrHourAndMin.join(':');
    }
  }

  return '';
}