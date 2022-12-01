export function highest(numberArray: number[]) : number {
    const [first, second, ..._] = numberArray;
    if (numberArray.length === 0) return 0;
    if (numberArray.length === 1) return first;
    if (numberArray.length === 2) return (first >= second) ? first : second;
    const isThereHigher = highest(numberArray.splice(1, numberArray.length - 1))
    return (first >= isThereHigher) ? first : isThereHigher;
}