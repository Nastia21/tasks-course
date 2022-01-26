export const stringMerge = (strFirst, strSecond, separator) => {
    let index_first, index_second;
    index_first = strFirst.indexOf(separator);
    index_second = strSecond.indexOf(separator);
    if (index_first != -1 && index_second != -1)
        return strFirst.slice(0, index_first) + strSecond.slice(index_second);
    else
        return "Error";
}
