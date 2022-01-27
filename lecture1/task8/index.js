export const countOccurrences = (strTask, letter) => {

    const regex = new RegExp("[" + letter + "]", "gi");
    const output = strTask.match(regex);
    if (output == null)
    {
        return 0;
    }
    const count = output.length;
  
    return count;
}
