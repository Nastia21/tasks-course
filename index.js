export const basicOp = (a,b, oper) =>{
    
    switch (oper){
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
        case '%':
            return a % b;
            break; 
    }
}
