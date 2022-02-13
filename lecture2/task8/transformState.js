export const transformState = (state, transforms) => {  
  transforms.forEach(item => {

    switch(item.operation){
    case 'addProperties':
      addProperty(state, item.properties);
      break;
    case 'removeProperties':
      removeProperty(state, item.properties);
      break;    
    case 'clear':
      Object.getOwnPropertyNames(state).forEach(function(prop) {
        delete state[prop];
      });
      break;
    default:
      return 'Error';
    }   
  },
  );
  
  return state;
};


function addProperty(state, properties){
  for(const key in properties){
    state[key] = JSON.parse(JSON.stringify(properties[key]));
  }
}

function removeProperty(state,properties){
  properties.forEach(property => {
    delete state[property];
  });
}
