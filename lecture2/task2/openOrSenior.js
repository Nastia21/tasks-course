export const openOrSenior = (infoWorker) => {

  const strOfInfo = infoWorker.join('|');
  const pattern = /(\d{2},\d+)/g;
  const arrOfDataOfWorkers = strOfInfo.match(pattern);
  
  const result = new Array();
  
  for(let i = 0; i < arrOfDataOfWorkers.length; i++){

    const strOfAgeAndExperience = arrOfDataOfWorkers[i].split(',');

    if(strOfAgeAndExperience[0] >= 40 && strOfAgeAndExperience[1] >= 15){
      result.push('Senior'); 
    } else{
      result.push('Open');
    }
  }

  return result ;
};
