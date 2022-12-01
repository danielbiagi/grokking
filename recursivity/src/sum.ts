export function sumArray(numberArray: number[]) : number {
    if (numberArray.length === 0) return 0;
    const [first, ...stack] = numberArray;
    return first + sumArray(stack);
}