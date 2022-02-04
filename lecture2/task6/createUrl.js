export const createUrl = (strTask, objInput) => {
  let template = strTask;
  const keys = template.match(/{\w*}/gm);

  for (const [key, value] of Object.entries(objInput)) {
    template = template.replace(`{${key}}`, `${value}`); 
  }
  
  keys.forEach(item => {
    if(strTask === template){
      template = template.replace(item, 'undefined');
    }
  },
  );

  return template;
};


