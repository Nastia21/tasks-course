export const basicOp = (a,b, operation) =>{
    
    switch (operation){
        case '+':
            return a + b;
            break;
         case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default:
            return 'Error - entered operation is incorrect'
    }
}
