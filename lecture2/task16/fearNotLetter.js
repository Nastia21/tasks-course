export const fearNotLetter = (strTask) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const firstInd = alphabet.indexOf(strTask[0]);
  const secondInd = alphabet.indexOf(strTask[strTask.length-1]);
  
  alphabet = alphabet.slice(firstInd,secondInd+1);
  alphabet = alphabet.split('');
  strTask = strTask.split('');
  
  const filterMissedLetter = alphabet.filter(item => !strTask.includes(item))
  
  if(filterMissedLetter.length === 0 ){
    return 'undefined';
  } else{
    return filterMissedLetter[0].replace(/[{}]/g, '');
}
};

