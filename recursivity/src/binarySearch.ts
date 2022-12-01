export function recursiveBinarySearch (arr: number[], searchValue: number): number {
    const middle = Math.floor((arr.length - 1) / 2);
    const midValue = arr[middle];

    if (searchValue === midValue) return middle;
    // ~ operator adds 1 to the value and then inverts the value
    if (arr.length === 1) return (midValue > searchValue) ? ~0 : ~1;
    if (searchValue < midValue) return recursiveBinarySearch(arr.slice(0, middle), searchValue)

    const searchRight = recursiveBinarySearch(arr.slice(middle + 1), searchValue);
    return searchRight >= 0
        ? middle + 1 + searchRight
        : ~(middle + 1 + ~searchRight)
};