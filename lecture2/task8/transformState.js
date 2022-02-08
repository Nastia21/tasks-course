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

  function addProperty(state, properties){
    for(const key in properties){
      state[key] = properties[key];
    }

    return state;
  }

  function removeProperty(state,properties){
    for(const property in properties ){
      delete state[property];
    }

    return state;
  }
};

