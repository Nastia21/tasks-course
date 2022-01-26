export const createPhoneNumber = (number) => {
    if (number.length > 10){
        return "Enter 10 numbers"
    }

    number = number.join("");
    return "(" + number.slice(0, 3) + ") " + number.slice(3, 6) + '-' + number.slice(6);


}
