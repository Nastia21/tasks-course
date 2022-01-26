export const basicOp = (a,b, operation) =>{
    
    switch (operation){
        case '+':
            return a + b;
         case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;  
        default:
            return 0;
    }
}
