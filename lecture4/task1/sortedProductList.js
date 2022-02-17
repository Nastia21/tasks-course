export const sortedProductList = async() => {
 
  const url = 'https://fakestoreapi.com/products';

  const response = await fetch(url);
  
  const data = await response.json();
  
  data.sort((firstObj, secondObj) => (firstObj.price < secondObj.price) ? 1 : -1);
  data.sort((firstObj, secondObj) => firstObj.category.localeCompare(secondObj.category));

  return data;
};
