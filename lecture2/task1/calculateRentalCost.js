export const calculateRentalCost = (daysOfRent) => {
  
  const price = 40;
  const discoutForThreeDays = 20;
  const discoutForSevenDays = 50;

  if(daysOfRent <= 2){
    return daysOfRent * price;
  }

  if(daysOfRent >= 7){
    return daysOfRent * price - discoutForSevenDays;
  }

  if(daysOfRent >= 3){
    return daysOfRent * price - discoutForThreeDays;
  }

};
