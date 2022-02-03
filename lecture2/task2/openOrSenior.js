export const openOrSenior = (infoWorker) => {

  const MINAGE = 40;
  const MINEXPERIENCE = 15;
  const strOfInfo = infoWorker.join('|');
  const pattern = /(\d{2},\d+)/g;
  const arrOfDataOfWorkers = strOfInfo.match(pattern);
  
  const result = [];
  
  for(let i = 0; i < arrOfDataOfWorkers.length; i++){

    const strOfAgeAndExperience = arrOfDataOfWorkers[i].split(',');

    if(strOfAgeAndExperience[0] >= MINAGE && strOfAgeAndExperience[1] >= MINEXPERIENCE){
      result.push('Senior'); 
    } else{
      result.push('Open');
    }
  }

  return result ;
};
