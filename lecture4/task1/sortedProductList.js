export const sortedProductList = async() => {
 
  const url = 'https://fakestoreapi.com/products';

  const responce = await fetch(url);
  
  const data = await responce.json();
  
  data.sort((a, b) => a.category.localeCompare(b.category) );
  data.sort((a, b) => (a.price < b.price) ? 1 : -1);

  return data;
  
};
