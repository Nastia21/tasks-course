require('dotenv').config();

export const sortedProductList = async() => {
  try{
    const response = await fetch(process.env.URL);

    const data = await response.json();
  
    data.sort((firstObj, secondObj) => (secondObj.price - firstObj.price));
    data.sort((firstObj, secondObj) => firstObj.category.localeCompare(secondObj.category));
    
    return data;
  }catch(error){
    return error.message; 
  }
};

