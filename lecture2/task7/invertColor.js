export const invertColor = (inputHex) => {

  inputHex = inputHex.toUpperCase();
  inputHex = inputHex.replace('#','');

  const valueHex = '0123456789ABCDEF';

  const arrCharHexColor = inputHex.split('');

  const arrInvertHex = new Array();

  for(let i = 0; i < arrCharHexColor.length; i++){
    const index = valueHex.indexOf(arrCharHexColor[i]);
    const resultIndex = valueHex.length - index - 1;

    arrInvertHex.push(valueHex[resultIndex].toLowerCase());
  }

    return `#${arrInvertHex.join('')}`;
 
};

