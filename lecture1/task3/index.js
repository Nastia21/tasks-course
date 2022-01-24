export const createPhoneNumber = (number) => {
    let lenArrNum = number.length;
    number = number.join("");
    return "(" + number.slice(0, 3) + ") " + number.slice(3, 6) + '-' + number.slice(6, lenArrNum);

}
