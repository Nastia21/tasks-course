export const calculateRentalCost = (daysOfRent) => {
  
  const PRICE = 40;
  const DISCOUNTFORTHREEDAYS = 20;
  const DISCOUNTFORSEVENDAYS = 50;
  const TWODAYS = 2;
  const THREEDAYS = 3;
  const WEEK = 7;

  if(daysOfRent <= TWODAYS){
    return daysOfRent * PRICE;
  }

  if(daysOfRent >= WEEK){
    return daysOfRent * PRICE - DISCOUNTFORSEVENDAYS;
  }

  if(daysOfRent >= THREEDAYS){
    return daysOfRent * PRICE - DISCOUNTFORTHREEDAYS;
  }

};
